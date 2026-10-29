import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import MarkdownIt from 'markdown-it';
import matter from 'gray-matter';
import texmath from 'markdown-it-texmath';
import katex from 'katex';

const textOnly = (text) => text.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"');

export function renderMarkdown(body) {
  const md = new MarkdownIt({ html: false, linkify: true, typographer: false });
  md.use(texmath, { engine: katex, delimiters: 'dollars', katexOptions: { trust: false, strict: 'ignore', throwOnError: true } });
  // Notion exports can wrap a single-dollar formula across physical lines.
  md.inline.ruler.before('escape', 'notion_multiline_math', (state, silent) => {
    const start = state.pos;
    if (state.src[start] !== '$' || state.src[start+1] === '$') return false;
    const end = state.src.indexOf('$', start+1);
    if (end < 0) return false;
    const formula = state.src.slice(start+1, end);
    if (!formula.includes('\n') || !formula.includes('\\')) return false;
    if (!silent) {
      const token = state.push('math_inline', 'math', 0);
      token.content = formula.replace(/\s*\n\s*/g, ' ').trim();
    }
    state.pos = end+1;
    return true;
  });
  // Recover the duplicated accessible label + TeX form present in the export.
  const exportedLabels = new Map([
    ['BcoreB_{\\text{core}}', 'B_{\\text{core}}'],
    ['AboostA_{\\text{boost}}', 'A_{\\text{boost}}'],
    ['wkw_k', 'w_k'], ['λj\\lambda_j', '\\lambda_j'], ['yjy_j', 'y_j']
  ]);
  const labelPattern = /BcoreB_\{\\text\{core\}\}|AboostA_\{\\text\{boost\}\}|wkw_k|λj\\lambda_j|yjy_j/g;
  md.core.ruler.after('text_join', 'notion_math_labels', state => {
    for (const block of state.tokens) {
      if (!block.children) continue;
      block.children = block.children.flatMap(token => {
        if (token.type !== 'text') return [token];
        const result = [];
        let position = 0;
        for (const match of token.content.matchAll(labelPattern)) {
          if (match.index > position) { const before = new state.Token('text', '', 0); before.content = token.content.slice(position, match.index); result.push(before); }
          const math = new state.Token('math_inline', 'math', 0); math.content = exportedLabels.get(match[0]); result.push(math);
          position = match.index + match[0].length;
        }
        if (!result.length) return [token];
        if (position < token.content.length) { const after = new state.Token('text', '', 0); after.content = token.content.slice(position); result.push(after); }
        return result;
      });
    }
  });
  const tokens = md.parse(body, {});
  const hasTopLevel = tokens.some(token => token.type === 'heading_open' && token.tag === 'h1');
  const headings = [];
  let count = 0;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.type === 'heading_open' || token.type === 'heading_close') {
      if (hasTopLevel) token.tag = `h${Math.min(6, Number(token.tag.slice(1)) + 1)}`;
      if (token.type === 'heading_open') {
        const id = `section-${++count}`;
        token.attrSet('id', id);
        if (token.tag === 'h2' || !tokens.some(item => item.type === 'heading_open' && item.tag === 'h2')) {
          headings.push({ id, title: tokens[i+1].children?.map(item => item.type === 'image' ? item.content : item.content).join('') || tokens[i+1].content });
        }
      }
    }
  }
  const imageRule = md.renderer.rules.image;
  md.renderer.rules.image = (tokens, index, options, env, self) => {
    tokens[index].attrSet('loading', 'lazy');
    tokens[index].attrSet('decoding', 'async');
    return imageRule(tokens, index, options, env, self);
  };
  md.renderer.rules.table_open = () => '<div class="portfolio-table-scroll" tabindex="0" role="region" aria-label="Scrollable table"><table>\n';
  md.renderer.rules.table_close = () => '</table></div>\n';
  const html = md.renderer.render(tokens, md.options, {});
  if (/class="katex-error"|KaTeX parse error/.test(html)) throw new Error('An equation could not be rendered.');
  return { html, headings, math: html.includes('class="katex"') };
}

export async function loadArticles(contentRoot) {
  const articles = [];
  for (const collection of ['medprism', 'sci-industrialist', 'notes']) {
    for (const name of (await readdir(path.join(contentRoot, collection))).filter(name => /\.(md|html)$/.test(name)).sort()) {
      const { data, content } = matter(await readFile(path.join(contentRoot, collection, name), 'utf8'));
      for (const field of ['title','slug','date','lang','category','description']) {
        if (typeof data[field] !== 'string' || !data[field]) throw new Error(`${name}: missing ${field}`);
      }
      if (!/^[a-z0-9-]+$/.test(data.slug) || !/^\d{4}-\d{2}-\d{2}$/.test(data.date) || data.collection !== collection) throw new Error(`${name}: invalid metadata`);
      const articlePath = data.path || `${collection}/${data.slug}/index.html`;
      if (!/^(posts|medprism|sci-industrialist|notes)\/[a-z0-9/-]+\.html$/.test(articlePath)) throw new Error(`${name}: invalid path`);
      const rendered = name.endsWith('.md') ? renderMarkdown(content) : {
        html: content.trim(),
        headings: [...content.matchAll(/<h2\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g)].map(match => ({ id: match[1], title: textOnly(match[2]) })),
        math: false
      };
      articles.push({ ...data, collection, path: articlePath, tags: Array.isArray(data.tags) ? data.tags : [], ...rendered });
    }
  }
  if (new Set(articles.map(article => article.path)).size !== articles.length) throw new Error('Duplicate article URL');
  return articles.sort((a,b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}
