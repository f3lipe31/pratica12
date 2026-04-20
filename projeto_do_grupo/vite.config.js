import { resolve } from 'path'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:     resolve(__dirname, 'index.html'),
        cadastro: resolve(__dirname, 'src/pages/cadastro.html'),
        listagem: resolve(__dirname, 'src/pages/listagem.html'),
      },
    },
  },
})