import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function resolveBase(): string {
  if (process.env.GITHUB_PAGES !== 'true') {
    return '/';
  }
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
  if (!repoName) {
    return '/eymenle-atasozu-ve-deyimler/';
  }
  return repoName.endsWith('.github.io') ? '/' : `/${repoName}/`;
}

export default defineConfig({
  base: resolveBase(),
  plugins: [react(), tailwindcss()],
})
