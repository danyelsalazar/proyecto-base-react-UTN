import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../context/chatContext";


const Register = () =>{
    const [firstName, setFirsName] = useState("")
    const [lastName, setLastName] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirnmPassword] = useState("")
    const [registrado, setRegistrado] = useState(false)
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({ firstName: ``, lastName: ``, email: ``, password: ``, confirmPassword: ``});

    const navigate = useNavigate()

    const {users, setUsers} = useContext(ChatContext)

    const handleSobmit = (e)=>{
        e.preventDefault()

        if(password === confirmPassword){
            setRegistrado(true)
            setError(null)
            const newUser = {
                    id: crypto.randomUUID(),
                    firstName: firstName,
                    lastName: lastName,
                    address: { country: "VE" },
                    email: email,
                    password: password,
                    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFGlcLiV1xaDg/profile-displayphoto-scale_400_400/B4DZvJ55pmJoAg-/0/1768618958697?e=1772668800&v=beta&t=sKFzZ4fLEjzUCsd7oTePMKEkHh5nM58Fk_1F2Gnw6rA",
                    online: false,
                    lastMessage: "Hola soy un usuario registrado desde el formulario",
                    lastTime: "09:13",
                    messages: [
                        { id: crypto.randomUUID(), author: firstName, text: "Hola soy un usuario registrado desde el formulario", time: "09:10" }
                    ]
            }
            setUsers([...users, newUser])
            
            // RESET: Volvemos al los valores iniociales del; formulario
            setFormData({ firstName: ``, lastName: ``, email: ``, password: ``, confirmPassword: `` }); 
            return
        }else if(password != confirmPassword){
            setError(true)
        }
    }

    const handleChangeEmail = (e)=>{
        setEmail(e.target.value)
        setFormData({...formData, email: e.target.value})
    }

    const handleChangePassword = (e)=>{
        setPassword(e.target.value)
        setFormData({...formData, password: e.target.value})
    }

    const handleChangeConfirmPassword = (e)=>{
        setConfirnmPassword(e.target.value)
        setFormData({...formData, confirmPassword: e.target.value})
    }

    const handleChangeFirsName = (e)=>{
        setFirsName(e.target.value)
        setFormData({...formData, firstName: e.target.value})
    }

    const handleChangeLastName = (e)=>{
        setLastName(e.target.value)
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