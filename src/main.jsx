import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { ChatContext, ChatProvider } from './context/chatContext'
import { RouterApp } from './router/RouterApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvider>
      <RouterApp/>
    </ChatProvider>
  </StrictMode>,
)
