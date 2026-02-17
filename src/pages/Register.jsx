import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../context/chatContext";


const Register = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirnmPassword] = useState("")
    const [registrado, setRegistrado] = useState(false)
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({ email: ``, password: ``, confirmPassword: ``});

    const navigate = useNavigate()

    const {users} = useContext(ChatContext)

    const handleSobmit = (e)=>{
        e.preventDefault()

        if(password === confirmPassword){
            setRegistrado(true)
            setError(null)
            // RESET: Vuelves el estado a su valor inicial
            setFormData({ email: ``, password: ``, confirmPassword: `` }); 
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

    return(
        <section className="container-form">
            <form  onSubmit={handleSobmit}>
                <h2>Registro de Usuario</h2>
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