import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';

export default defineConfig({
  root: __dirname,
  base: '/lwh/',
  plugins: [react()],
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
        research: path.resolve(__dirname, 'research.html')
      }
    }
  }
});
