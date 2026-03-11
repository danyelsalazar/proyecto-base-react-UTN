import { ChatContext } from "../context/ChatContext"
import { useContext } from "react"

const Profile = ({setOpenInfoProfile})=>{

    const {loggedUser, users} = useContext(ChatContext)

    return(
        <div className="modal-settings">

            <div className="settings-card">

                <h2>Informacion del perfil</h2>

                <img src={loggedUser.avatar} className="settings-avatar img-profile-info"/>

                <p className="info-profile-text"><b>Nombre:</b> {loggedUser.firstName}</p>
                <p className="info-profile-text"><b>Apellido:</b> {loggedUser.lastName}</p>
                <p className="info-profile-text"><b>Email:</b> {loggedUser.email}</p>
                <p className="info-profile-text"></p>

                <div className="settings-buttons">

                    <button className="btn-udtate-settings" onClick={()=>setOpenInfoProfile(false)}>
                        Cerrar
                    </button>

                </div>

            </div>

        </div>
    )
}

export {Profile}