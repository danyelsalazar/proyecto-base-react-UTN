const Login = ()=>{
    return (
        <section className="container-form">
            <form>
                <h2>Inicio de sesion</h2>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password" />
                <button>Ingresar</button>
            </form>
        </section>
    )
}

export {Login}