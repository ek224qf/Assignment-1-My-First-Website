import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = dirname(fileURLToPath(import.meta.url))
const htmlRoot = resolve(projectRoot, 'src/HTML')

export default defineConfig({
  // The pages live in src/HTML, not at the repository root.
  root: htmlRoot,
  // Static files to copy as-is live in the repository's public folder.
  publicDir: resolve(projectRoot, 'public'),
  // Relative URLs so the built pages work from any path.
  base: './',
  build: {
    outDir: resolve(projectRoot, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(htmlRoot, 'index.html'),
        about: resolve(htmlRoot, 'about.html'),
        contact: resolve(htmlRoot, 'contact.html'),
      },
    },
  },
  server: {
    // The CSS and MEDIA folders sit outside the root, so allow reading them in dev.
    fs: {
      allow: [projectRoot],
    },
  },
})
