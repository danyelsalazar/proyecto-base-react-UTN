import { Chat } from './Chat'
import { Aside } from './Aside'
import { useState } from 'react'

const App = ()=>{
  const [contactSelect, setContactSelect] = useState(undefined)

  return(
    <main className='app'>
      <Aside />
      <Chat />
    </main>
  )
}

export {App}