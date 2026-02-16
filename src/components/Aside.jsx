import { useContext, useEffect, useState } from "react"
import { ChatContext } from "../context/chatContext"

const Aside= ()=>{

    const [search, setSearch] = useState("")
    const{users, selectUser, handleSelectUser} = useContext(ChatContext)

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
    

    return(
        <aside>
            <div className="container-search">
                <h1>Chat UTN</h1>
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