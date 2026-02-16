import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { ChatContext, ChatProvider } from './context/chatContext'
import { App } from './components/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvider>
      <App/>
    </ChatProvider>
  </StrictMode>,
)
