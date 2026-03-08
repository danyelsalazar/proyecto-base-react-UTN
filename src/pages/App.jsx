import { Chat } from '../components/Chat'
import { Aside } from '../components/Aside'
import { useParams } from 'react-router-dom'

const App = ()=>{

  const { id } = useParams()
  
  return(
    <main className='app'>
      <Aside chatOpen={!!id}/>
      <Chat chatOpen={!!id} />
    </main>
  )
}

export {App}