// https://vitejs.dev/config/

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const gitLastCommitHash = require('child_process').execSync('git rev-parse HEAD').toString().trim()
const path = require('path')

export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  define: {
    GIT_LAST_COMMIT_HASH: JSON.stringify(gitLastCommitHash)
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
})
