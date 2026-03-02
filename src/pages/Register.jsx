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
            setUsers(prev =>[...prev, newUser])
            
            // RESET: Volvemos al los valores iniociales del; formulario
            setFormData({ firstName: ``, lastName: ``, email: ``, password: ``, confirmPassword: `` }); 
            return
        }else if(formData.password != formData.confirmPassword){
            setError(true)
        }
    }

     const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    return(
        <section className="container-form">
            <form  onSubmit={handleSobmit}>
                <h2>Registro de Usuario</h2>
                <input name= "firstName" type="text" placeholder="First name" onChange={handleChange} value={formData.firstName} required/>
                <input name= "lastName" type="text" placeholder="Last name" onChange={handleChange} value={formData.lastName} required/>
                <input name= "email" type="email" placeholder="Email" onChange={handleChange} value={formData.email} required/>
                <input name= "password" type="password" placeholder="Password" onChange={handleChange} value={formData.password} required />
                <input name= "confirmPassword" type="password" placeholder="Confirm password" onChange={handleChange} value={formData.confirmPassword} required/>
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