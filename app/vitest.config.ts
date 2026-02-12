import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, 'src/test/setup.ts'),
    globals: true,
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx']
  }
});
