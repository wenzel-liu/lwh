import { access, cp, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..', '..');
const distDir = path.resolve(repoRoot, 'app', 'dist');

const htmlFiles = ['index.html', 'blog.html', 'experience.html', 'research.html'];

async function ensureBuildExists() {
  try {
    await access(distDir);
  } catch {
    throw new Error(`Build output not found at ${distDir}. Run \"npm run build\" first.`);
  }
}

async function copyHtmlFiles() {
  for (const file of htmlFiles) {
    const source = path.resolve(distDir, file);
    const target = path.resolve(repoRoot, file);
    await cp(source, target, { force: true });
  }
}

async function syncAssets() {
  const sourceAssets = path.resolve(distDir, 'app-assets');
  const targetAssets = path.resolve(repoRoot, 'app-assets');

  await rm(targetAssets, { recursive: true, force: true });
  await cp(sourceAssets, targetAssets, { recursive: true, force: true });
}

async function main() {
  await ensureBuildExists();
  await copyHtmlFiles();
  await syncAssets();
  process.stdout.write('Published app/dist HTML files and app-assets to repository root.\n');
}

main().catch((error) => {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exit(1);
});
