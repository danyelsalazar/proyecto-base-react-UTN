import { createContext, useContext, useEffect, useState } from "react";
import { users as mokUsers} from "../services/api";

//1 creamos un contexto
const ChatContext = createContext()

//2 proveemos el contexto
const ChatProvider = ( {children} )=>{

    const [users, setUsers] = useState(mokUsers)//guardara toda la info de todos los contactos
    const [selectUser, setSelectUser] = useState(null) //guardara el usuario selecionado
    const [messagesUser, setMessagesUser] = useState([])

    const[loggedUser, setLoggedUser] = useState(null)

    useEffect(()=>{
        if (selectUser) {
            setMessagesUser(selectUser.messages || [])
        }
    },[selectUser])
    
    const handleSelectUser = (user)=>{
        setSelectUser(user)
    }

    const login = (userData) =>{

        const foundUser = mokUsers.find(user => user.email === userData.email)
        console.log(foundUser);

        if(!foundUser){
            return false
        }

        if(foundUser.password === userData.password){
            return true
        }

        return false
        
    }
    return(
        <ChatContext.Provider  value={{users, selectUser, messagesUser, login, setSelectUser, setMessagesUser, setUsers,  handleSelectUser}}>
            {children}
        </ChatContext.Provider>
    )
}

export {ChatContext , ChatProvider}