// https://vitejs.dev/config/

import react from '@vitejs/plugin-react'
import { Plugin, defineConfig } from 'vite'
import ViteRadar from 'vite-plugin-radar'

const gitLastCommitHash = require('child_process').execSync('git rev-parse HEAD').toString().trim()
const path = require('path')

export default ({ mode }) => {
  const plugins: Plugin[] = [react() as unknown as Plugin]

  if (mode === 'production') {
    plugins.push(
      ViteRadar({
        analytics: {
          id: 'G-M9T311YKHQ'
        }
      })
    )
  }

  return defineConfig({
    plugins,
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
}
