import { notes } from '@/content/notes';
import { Tags } from '@/components/PortfolioParts';
import { siteHref } from '@/lib/nav';

export function NotePage() {
  const slug = window.location.pathname.split('/').pop()?.replace(/\.html$/, '');
  const note = notes.find((item) => item.slug === slug);
  if (!note) {
    return <div className="portfolio-page"><h1>Note not found</h1><a className="portfolio-text-link" href={siteHref('blog.html#notes')}>Back to notes</a></div>;
  }
  return (
    <article className="portfolio-article" lang="zh-CN">
      <header className="portfolio-article-header">
        <a className="portfolio-text-link" href={siteHref('blog.html#notes')}><span aria-hidden="true">←</span> 返回文章列表</a>
        <p className="portfolio-kicker"><time dateTime={note.isoDate}>{note.date}</time><span>存档文章 · Wenzel Liu</span></p>
        <h1>{note.title}</h1>
        <Tags items={note.tags} label="文章标签" />
      </header>
      <div className="portfolio-article-layout">
        <aside className="portfolio-toc">
          <p className="portfolio-kicker">文章目录</p>
          <nav aria-label="文章目录">{note.headings.map((heading) => <a key={heading.id} href={'#' + heading.id}>{heading.title}</a>)}</nav>
        </aside>
        <div className="portfolio-prose">
          {/* These are local, versioned article bodies, not visitor-supplied HTML. */}
          <div dangerouslySetInnerHTML={{ __html: note.html }} />
          <footer className="portfolio-article-end">
            <p>原文发表于 {note.date}。</p>
            <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>
          </footer>
        </div>
      </div>
      <section className="portfolio-related">
        <h2>继续阅读</h2>
        <div className="portfolio-related-links">
          {notes.filter((item) => item.slug !== note.slug).map((item) => <a key={item.slug} href={siteHref('posts/' + item.slug + '.html')}>{item.title} <span aria-hidden="true">↗</span></a>)}
        </div>
      </section>
    </article>
  );
}
