import { test } from 'node:test';
import assert from 'node:assert/strict';
import { renderMarkdown } from './article-content.mjs';

test('Notion multiline formulas and duplicated labels render without rewriting code samples', () => {
  const result = renderMarkdown('## 公式\n\n$A_{\\text{boost}}\n=\\sum_j \\lambda_j y_j$\n\nBcoreB_{\\text{core}}\n\n`BcoreB_{\\text{core}}`');
  assert.equal((result.html.match(/class="katex"/g) || []).length, 2);
  assert.ok(result.html.includes('<code>BcoreB_{\\text{core}}</code>'));
  assert.equal(result.math, true);
});

test('invalid equations fail the build instead of publishing an error', () => {
  assert.throws(() => renderMarkdown('$$\\notarealcommand{x}$$'), /equation/);
});

test('headings have distinct anchors, tables scroll, and raw HTML stays text', () => {
  const { html, headings } = renderMarkdown('## A\n\nText\n\n## A\n\n| A | B |\n|---|---|\n|1|2|\n\n<script>alert(1)</script>');
  assert.deepEqual(headings.map(item => item.id), ['section-1','section-2']);
  assert.ok(html.includes('portfolio-table-scroll'));
  assert.ok(!html.includes('<script>'));
});
