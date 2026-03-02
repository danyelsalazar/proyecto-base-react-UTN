import { useContext, useEffect, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { Navigate, useNavigate } from "react-router-dom"

const Aside= ()=>{

    const [search, setSearch] = useState("")
    const{users, handleSelectUser} = useContext(ChatContext)
    const navigator = useNavigate()

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
        <aside>
            <div className="container-search">
                <div className="header-exit">
                    <h1>Chat UTN</h1>
                    <button className="cerrar-sesion" onClick={handleCerrarSesion}><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" stroke="#f7f6f6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4.001H5v14a2 2 0 0 0 2 2h8m1-5l3-3m0 0l-3-3m3 3H9"/></svg></button>
                </div>
                <input type="search" placeholder="Buscar contactos..." onChange={handleChange} className="search"/>
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

        </aside>
    )
}
export {Aside}