import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ScreenSizeProvider } from '@ui/screen-size-provider'
import Variables from '@ui/design-system/variables';

// import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ScreenSizeProvider>
      <Variables />
      <App />
    </ScreenSizeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
