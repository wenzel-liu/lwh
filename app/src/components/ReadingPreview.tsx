import { useState } from 'react';

const readingSample = 'A small tool for reading on the web. Keep your attention on the words, and make room for the ideas that matter to you.';

export function ReadingPreview() {
  const [emphasis, setEmphasis] = useState(true);
  return (
    <div className="portfolio-reader">
      <div className="portfolio-reader-toolbar">
        <span>Reading preview</span>
        <button className="portfolio-reader-toggle" type="button" aria-pressed={emphasis} aria-controls="reading-sample" onClick={() => setEmphasis((enabled) => !enabled)}>
          <span className="portfolio-switch" aria-hidden="true" />Word emphasis
        </button>
      </div>
      <div className="portfolio-reader-page">
        <p className="portfolio-reader-label">A MOMENT TO READ</p>
        <h3>A little more focus.</h3>
        <p id="reading-sample" className={`portfolio-reading-sample${emphasis ? ' is-emphasized' : ''}`}>
          {readingSample.split(/(\s+)/).map((word, index) => {
            if (!/[a-z]/i.test(word)) return word;
            const prefix = Math.ceil(word.replace(/[^a-z]/gi, '').length / 2);
            return <span key={index}><strong>{word.slice(0, prefix)}</strong>{word.slice(prefix)}</span>;
          })}
        </p>
        <div className="portfolio-reader-note"><span aria-hidden="true">↳</span> Try the word emphasis switch above.</div>
      </div>
    </div>
  );
}
