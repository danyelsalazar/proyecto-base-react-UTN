import { useContext, useEffect, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"
import { Settings } from "./Settings"

const Aside= ({chatOpen})=>{

    const [search, setSearch] = useState("")
    const{users, handleSelectUser} = useContext(ChatContext)
    const navigator = useNavigate()
    const [openSettings, setOpenSettings] = useState(false)

    const handleChange= (e)=>{
        // console.log("modificando input");
        setSearch(e.target.value)
        
    }

    const filterContacts = users.filter((contacto)=> {
        const fullname = `${contacto.firstName} ${contacto.lastName}`

        return(
        contacto.firstName.toLowerCase().includes(search.toLowerCase()) || contacto.lastName.toLowerCase().includes(search.toLowerCase()) || fullname.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    })
    // console.log(filterUsers);
    
     const handleCerrarSesion = ()=>{
        localStorage.removeItem("user")
        handleSelectUser(null)
        navigator("/login")
    }

    return(
        <aside className={chatOpen ? "aside hide-mobile" : "aside"}>
            <div className="container-search">
                <div className="header-exit">
                    <h1>Chat UTN</h1>
                    <div className="container-settings-close">
                        <button className="setting-aside btn-aside" onClick={()=> setOpenSettings(true)}><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" ><path fill="#ffffff" d="m19.59 15.5l-1.82-1.3c.3-1.08.32-2.25 0-3.42l1.82-1.28L18.14 7l-2.03.92c-.79-.8-1.79-1.42-2.96-1.71L12.95 4h-2.9l-.2 2.21c-1.17.29-2.17.91-2.96 1.71L4.86 7L3.41 9.5l1.82 1.28c-.32 1.17-.3 2.34 0 3.42l-1.82 1.3L4.86 18l2.03-.93c.79.79 1.79 1.39 2.96 1.7l.2 2.23h2.9l.2-2.23c1.17-.31 2.17-.91 2.96-1.7l2.03.93zM13.5 3c.27 0 .5.2.5.46l.18 2.04c.76.28 1.44.69 2.05 1.18l1.85-.87c.23-.12.52-.04.66.19l2 3.5c.14.21.06.5-.16.65l-1.67 1.17c.13.8.12 1.59 0 2.36l1.67 1.17c.22.15.3.44.16.65l-2 3.5c-.14.21-.43.29-.66.17l-1.85-.86c-.61.49-1.29.89-2.05 1.19l-.18 2c0 .29-.23.5-.5.5h-4a.5.5 0 0 1-.5-.5l-.18-2c-.76-.3-1.44-.7-2.05-1.19l-1.85.86c-.23.12-.52.04-.66-.17l-2-3.5c-.14-.21-.06-.5.16-.65l1.67-1.17c-.12-.77-.13-1.56 0-2.36l-1.67-1.17c-.22-.15-.3-.44-.16-.65l2-3.5c.14-.23.43-.31.66-.19l1.85.87c.61-.49 1.29-.9 2.05-1.18L9 3.46c0-.26.23-.46.5-.46zm-2 6a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 12.5A3.5 3.5 0 0 1 11.5 9m0 1A2.5 2.5 0 0 0 9 12.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"/></svg></button>
                        <button className="cerrar-sesion btn-aside" onClick={handleCerrarSesion}><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" stroke="#f7f6f6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4.001H5v14a2 2 0 0 0 2 2h8m1-5l3-3m0 0l-3-3m3 3H9"/></svg></button>
                    </div>
                </div>
                <input type="search" placeholder=" Buscar contactos..." onChange={handleChange} className="search"/>
            </div>
            <ul className="container-view-chats">
                {
                    filterContacts.length === 0 && <li>No se encontro el contacto</li>
                }
            {
                filterContacts.map((contact)=>(
                    <li key={contact.id} onClick={()=>{ 
                        // console.log(contact);
                        handleSelectUser(contact)
                        navigator(`/chat/${contact.id}`)
                        }}>

                        <div className="container-img-chat">
                            <img src={contact.avatar} alt="" />
                        </div>
                        <div className="container-descripcion-chat">
                            <h3>{contact.firstName} {contact.lastName}</h3>
                            <small>{contact.address.country}</small>
                        </div>
                    </li>
                ))
            }
            </ul>
            {
                openSettings && <Settings setOpenSettings = {setOpenSettings}/>
            }
        </aside>
    )
}
export {Aside}