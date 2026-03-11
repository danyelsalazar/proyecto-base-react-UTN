import { createContext, useEffect, useState } from "react";
import { users as mokUsers} from "../services/api";

//1 creamos un contexto
const ChatContext = createContext()

//2 proveemos el contexto
const ChatProvider = ( {children} )=>{

    // const [users, setUsers] = useState(mokUsers)//guardara toda la info de todos los contactos
    
    const [users, setUsers] = useState(()=>{
    const savedUsers = localStorage.getItem("users")
    return savedUsers ? JSON.parse(savedUsers) : mokUsers
})

    const [selectUser, setSelectUser] = useState(null) //guardara el usuario selecionado
    const [messagesUser, setMessagesUser] = useState([])

    const[loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("user") || null)) //guarda usario logueado

    useEffect(()=>{
        if (selectUser) {
            setMessagesUser(selectUser.messages || [])
        }
    },[selectUser])
    
    const handleUser = (user)=>{
        setLoggedUser(user)
        localStorage.setItem("user", JSON.stringify(user))
    }

    const handleSelectUser = (user)=>{
        setSelectUser(user)
    }

    const login = (userData) =>{

        const foundUser = users.find(user => user.email === userData.email)
        // console.log(foundUser);

        if(!foundUser){
            return false
        }

        if(foundUser.password === userData.password){
            return foundUser
        }

        return false
        
    }
    useEffect(()=>{
         localStorage.setItem("users", JSON.stringify(users))
    },[users])

    return(
        <ChatContext.Provider  value={{users, selectUser, messagesUser, loggedUser, login, setSelectUser, setMessagesUser, setUsers,  handleSelectUser, handleUser, setLoggedUser}}>
            {children}
        </ChatContext.Provider>
    )
}

export {ChatContext , ChatProvider}