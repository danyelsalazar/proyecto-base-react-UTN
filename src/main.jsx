import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { ChatProvider } from './context/chatContext'
import { RouterApp } from './router/RouterApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvider>
      <RouterApp/>
    </ChatProvider>
  </StrictMode>,
)
