import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(dirname, 'index.html'),
        cadastro: resolve(dirname, 'src/pages/cadastro.html'),
        listagem: resolve(__dirname, 'src/pages/listagem.html'),
      },
    },
  },
})