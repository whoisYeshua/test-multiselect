import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ScreenSizeProvider } from '@ui/screen-size-provider'

import '@ui/design-system/styles/index.less'
import '@ui/design-system/styles/theme/default.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ScreenSizeProvider>
      <App />
    </ScreenSizeProvider>
  </React.StrictMode>
)
