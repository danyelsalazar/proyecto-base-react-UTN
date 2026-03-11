import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"

const Settings = ({setOpenSettings})=>{

    const {loggedUser, setLoggedUser, users, setUsers} = useContext(ChatContext)

    const [name, setName] = useState(loggedUser.firstname)
    const [avatar, setAvatar] = useState(loggedUser.avatar)

    // quede aqui es una idea que tengo meter todo aqui en un objeto mejort y no en varios estados separados
    const [newInfo, setNewInfo] = useState({
        firstname: loggedUser.firstName,
        lastName: loggedUser.lastName,
        avatar: loggedUser.avatar
    })

    const handleSave = ()=>{

        const updateUser = {
            ...loggedUser,
            firstName: newInfo.firstName,
            lastName: newInfo.lastName,
            avatar: newInfo.avatar

        }
        setLoggedUser(updateUser)

        const updateUsers = users.map((user) => user.id === updateUser.id ? updateUser : user)

        setUsers(updateUsers)

        localStorage.setItem("user", JSON.stringify(updateUser))

        setOpenSettings(false)

    }

    const handleImage = (e)=>{
        const file = e.target.files[0]

        if(!file){
            return
        }

        const reader = new FileReader()

        reader.onload = ()=>{
            setNewInfo(prev=>({
                ...prev,
                avatar: reader.result
            }))
        }
        reader.readAsDataURL(file)
    }

    return (
       <div className="modal-settings">

            <div className="settings-card">

                <h2>Ajustes de perfil</h2>

                <img src={avatar} className="settings-avatar"/>

                <input type="file" onChange={handleImage}/>

                <input
                    type="text"
                    value={name}
                    onChange={(e)=>setNewInfo(prev =>({
                        ...prev,
                        firstName: e.target.value
                    }))}
                    placeholder="Nombre"
                />
                <input
                    type="text"
                    value={name}
                    onChange={(e)=>setNewInfo(prev=>({
                        ...prev,
                        lastName: e.target.value
                    }))}
                    placeholder="Apellido"
                />

                <div className="settings-buttons">

                    <button onClick={()=>setOpenSettings(false)}>
                        Cancelar
                    </button>

                    <button onClick={handleSave}>
                        Guardar
                    </button>

                </div>

            </div>

        </div>
    )
}

export {Settings}