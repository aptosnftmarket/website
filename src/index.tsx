import { UiKitProvider } from '@onestaree/ui-kit'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './components'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <UiKitProvider forcedThemeName="dark">
      <App />
    </UiKitProvider>
  </React.StrictMode>
)

declare global {
  interface Window {
    onSubscriptionSuccess: () => void
  }
}
