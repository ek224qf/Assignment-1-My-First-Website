import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

// The pages live in src/HTML, with CSS and media as sibling folders, so
// Vite's root points there. publicDir and outDir are relative to that root,
// which keeps dist/ at the repo root -- the directory Netlify publishes.
const page = (name) =>
  fileURLToPath(new URL(`src/HTML/${name}.html`, import.meta.url))

export default defineConfig({
  root: 'src/HTML',
  publicDir: '../../public',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: page('index'),
        about: page('about'),
        contact: page('contact'),
      },
    },
  },
})
