import { createContext, useContext, useEffect, useState } from "react";
import { users as mokUsers} from "../services/api";

//1 creamos un contexto
const ChatContext = createContext()

//2 proveemos el contexto
const ChatProvider = ( {children} )=>{

    const [users, setUsers] = useState(mokUsers)//guardara toda la info de todos los contactos
    const [selectUser, setSelectUser] = useState(null) //guardara el id del usuario selecionado
    const [messagesUser, setMessagesUser] = useState([])

    useEffect(()=>{
        if (selectUser) {
            setMessagesUser(selectUser.messages || [])
        }
    },[selectUser])
    
    const handleSelectUser = (user)=>{
        setSelectUser(user)
    }
    return(
        <ChatContext.Provider  value={{users, selectUser, messagesUser, setMessagesUser, setUsers,  handleSelectUser}}>
            {children}
        </ChatContext.Provider>
    )
}

export {ChatContext , ChatProvider}