import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";

//para validar email usare este patron :
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Register = () =>{
    const [registrado, setRegistrado] = useState(null)
    const [error, setError] = useState(null) //lo usare parea verificar si hay error en cuanto a los campos al enviar el formulario

    //para validar posibles errores enn los campos de registro :
    const [errors, setErrors] = useState({
        firstName: "",
        lastName : "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    
    const [formData, setFormData] = useState({ 
        firstName:"", 
        lastName: "", 
        email: "", 
        password: "", 
        confirmPassword: ""
    });

    const navigate = useNavigate()

    const {users, setUsers} = useContext(ChatContext)

    const handleSobmit = (e)=>{
        e.preventDefault()

        if(Object.values(errors).some(error => error !== "")){
            return setError(true)
        }
        else{
            setRegistrado(true)
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
                
                // RESET: Volvemos al los valores iniciales del formulario
                setFormData({ firstName: ``, lastName: ``, email: ``, password: ``, confirmPassword: `` }); 

                navigate("/login")
        }
    }

     const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
        setError(null)
        validarRegistro(name, value)
    }

    const validarRegistro = (name, value) =>{

        //valido nombre
        if(name === "firstName"){
            if(value.length < 3){
                setErrors(prev =>({...prev, firstName: "Al menos 3 caracteres"}))
            }else{
                setErrors(prev =>({...prev, firstName: ""}))
            }
        }

        //valido apellido
        if(name === "lastName" ){
            if(value.length < 3){
                setErrors(prev =>({...prev, lastName: "Al menos 3 caracteres"}))
            }else{
                setErrors(prev =>({...prev, lastName: ""}))
            }
        }

        //validamos email:
        if(name === "email"){
            //verifico que sea el formato adecuado
            if(!emailPattern.test(value)){
                setErrors(prev =>({...prev, email: "ingrese un email valido" }))
            }
            //verifico que el mail no este ya registrado:
            else if(users.some(user=> user.email.toLowerCase() === value.toLowerCase())){
                setErrors(prev =>({...prev, email: "El email ya esta en uso" }))
            }
            else{
                setErrors(prev =>({...prev, email: "" }))
            }
        }

        //validamos el password
        if(name === "password"){
            //verifico que tenga minimo 6 caracteres
            if(value.length < 6){
                setErrors(prev => ({...prev, password: "Al menos 6 caracteres"}))
            }
            else{
                setErrors(prev => ({...prev, password: ""}))
            }
            //verifico que coincidan las contrasenias si el usario la cambia despues de que coincidan
            if(value != formData.confirmPassword){
                setErrors(prev =>({...prev, confirmPassword: "Las contrasenias no coinciden"}))
            }
            else{
                setErrors(prev =>({...prev, confirmPassword: ""}))
            }
        }
        //verifico si las contrasenias coinciden de vuelta por si lo cambia en alguno nde los dos campos

        if(name === "confirmPassword"){
            if(value != formData.password){
                setErrors(prev =>({...prev, confirmPassword: "Las contrasenias no coinciden"}))
            }
            else{
                setErrors(prev =>({...prev, confirmPassword: ""}))

            }
        }
    }

    return(
        <section className="container-form">
            <form  onSubmit={handleSobmit}>
                <h2>Registro de Usuario</h2>
                <input name= "firstName" type="text" placeholder="First name" onChange={handleChange} value={formData.firstName} required/>
                {
                    errors.firstName && <p>{errors.firstName}</p>
                }
                
                <input name= "lastName" type="text" placeholder="Last name" onChange={handleChange} value={formData.lastName} required/>
                {
                    errors.lastName && <p>{errors.lastName}</p>
                }

                <input name= "email" type="email" placeholder="Email" onChange={handleChange} value={formData.email} required/>
                {
                    errors.email && <p>{errors.email}</p>
                }
                <input name= "password" type="password" placeholder="Password" onChange={handleChange} value={formData.password} required />
                {
                    errors.password && <p>{errors.password}</p>
                }
                <input name= "confirmPassword" type="password" placeholder="Confirm password" onChange={handleChange} value={formData.confirmPassword} required/>
                {
                    errors.confirmPassword && <p>{errors.confirmPassword}</p>
                }
                <button>Registrarse</button>
                <div className="container-registro-acerca">
                    <p className="registrarse" onClick={()=> navigate("/login")}>Iniciar sesion</p>
                </div>
                {
                    error && <p>Error al llenar el formulario</p>
                }
            </form>
        </section>
    )
}

export {Register}