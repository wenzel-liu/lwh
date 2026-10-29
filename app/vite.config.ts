import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { readFileSync } from 'node:fs';

// Match the legacy Jekyll routes in local production previews.
const legacyRoutes: Record<string, string> = JSON.parse(readFileSync(path.resolve(__dirname, 'legacy-routes.json'), 'utf8'));
const contentPages: string[] = JSON.parse(readFileSync(path.resolve(__dirname, '.content-pages.json'), 'utf8'));

export default defineConfig({
  root: __dirname,
  base: '/lwh/',
  plugins: [
    react(),
    {
      name: 'legacy-page-redirects',
      generateBundle() {
        const layout = readFileSync(path.resolve(__dirname, '../_layouts/portfolio-redirect.html'), 'utf8');
        for (const [fileName, target] of Object.entries(legacyRoutes)) {
          const source = layout
            .split('{{ page.title }}').join('Wenzel Liu')
            .split('{{ page.redirect_to | relative_url }}').join('/lwh/' + target)
            .split('{{ page.redirect_to | absolute_url }}').join('https://wenzel-liu.github.io/lwh/' + target)
            .split("{{ '/assets/css/fonts.css' | relative_url }}").join('/lwh/assets/css/fonts.css');
          this.emitFile({ type: 'asset', fileName, source });
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'app-assets',
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        blog: path.resolve(__dirname, 'blog.html'),
        experience: path.resolve(__dirname, 'experience.html'),
        research: path.resolve(__dirname, 'research.html'),
        ...Object.fromEntries(contentPages.map((page, index) => [`content-${index}`, path.resolve(__dirname, page)]))
      }
    }
  }
});
