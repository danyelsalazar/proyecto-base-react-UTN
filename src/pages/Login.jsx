import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";

const Login = ()=>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const {login, handleUser} = useContext(ChatContext)
    const navigate = useNavigate();

    const handleChange= (e)=>{
        setEmail(e.target.value)
        // console.log(e.target.value);
        
    }

    const handleSubmit = (e)=>{

        e.preventDefault()
        setError(null)

        // console.log(users);

        const response = login({email, password})

        if(!response){
            setError(true)
            return
        }

        handleUser(response)
        navigate("/")
        
    }

    const handleChangePassword = (e)=>{
        setPassword(e.target.value)

    }

    return (
        <section className="container-form">
            <form onSubmit={handleSubmit}>
                <h2>Inicio de sesión</h2>
                <input type="email" placeholder="Email" onChange={handleChange} required/>
                <input type="password" placeholder="Password" onChange={handleChangePassword} required/>
                <button>Ingresar</button>
                <div className="container-registro-acerca">
                    <p className="registrarse" onClick={()=> navigate("/register")}>Registrarse</p>
                    <p className="registrarse acerca-de" onClick={()=> navigate("/acercade")}>Acerca de</p>
                    {error && <p className="error-inicio-sesion">error al ingresar</p>}
                </div>
            </form>
        </section>
    )
}

export {Login}