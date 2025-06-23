import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup';
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mdx()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})