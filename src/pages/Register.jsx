import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";


const Register = () =>{
    const [registrado, setRegistrado] = useState(false)
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({ firstName: ``, lastName: ``, email: ``, password: ``, confirmPassword: ``});

    const navigate = useNavigate()

    const {users, setUsers} = useContext(ChatContext)

    const handleSobmit = (e)=>{
        e.preventDefault()

        if(formData.password === formData.confirmPassword){
            setRegistrado(true)
            setError(null)
            const newUser = {
                    id: crypto.randomUUID(),
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    address: { country: "VE" },
                    email: formData.email,
                    password: formData.password,
                    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFGlcLiV1xaDg/profile-displayphoto-scale_400_400/B4DZvJ55pmJoAg-/0/1768618958697?e=1772668800&v=beta&t=sKFzZ4fLEjzUCsd7oTePMKEkHh5nM58Fk_1F2Gnw6rA",
                    online: false,
                    lastMessage: "Hola soy un usuario registrado desde el formulario",
                    lastTime: "09:13",
                    messages: [
                        { id: crypto.randomUUID(), author: formData.firstName, text: "Hola soy un usuario registrado desde el formulario", time: "09:10" }
                    ]
            }
            setUsers([...users, newUser])
            
            // RESET: Volvemos al los valores iniociales del; formulario
            setFormData({ firstName: ``, lastName: ``, email: ``, password: ``, confirmPassword: `` }); 
            return
        }else if(formData.password != formData.confirmPassword){
            setError(true)
        }
    }

    const handleChangeEmail = (e)=>{
        setFormData({...formData, email: e.target.value})
    }

    const handleChangePassword = (e)=>{
        setFormData({...formData, password: e.target.value})
    }

    const handleChangeConfirmPassword = (e)=>{
        setFormData({...formData, confirmPassword: e.target.value})
    }

    const handleChangeFirsName = (e)=>{
        setFormData({...formData, firstName: e.target.value})
    }

    const handleChangeLastName = (e)=>{
        setFormData({...formData, lastName: e.target.value})
    }

    return(
        <section className="container-form">
            <form  onSubmit={handleSobmit}>
                <h2>Registro de Usuario</h2>
                <input type="text" placeholder="First name" onChange={handleChangeFirsName} value={formData.firstName} required/>
                <input type="text" placeholder="Last name" onChange={handleChangeLastName} value={formData.lastName} required/>
                <input type="email" placeholder="Email" onChange={handleChangeEmail} value={formData.email} required/>
                <input type="password" placeholder="Password" onChange={handleChangePassword} value={formData.password} required />
                <input type="password" placeholder="Confirm password" onChange={handleChangeConfirmPassword} value={formData.confirmPassword} required/>
                <button>Registrarse</button>
                <p className="registrarse" onClick={()=> navigate("/login")}>Iniciar sesion</p>
                {
                    registrado && <p className="Registrado">!! Registrado</p>
                }
                {
                    error && <p className="error-inicio-sesion">Las constrasenas no coinciden</p>
                }
            </form>
        </section>
    )
}

export {Register}