import { useNavigate } from "react-router-dom"

const About = () => {
    const navigate = useNavigate()
    return(
        <section className="container-about">

            <div className="about-card">

                <header className="about-header">
                    <h1>Chat UTN</h1>
                    <p>
                        Aplicación de mensajería desarrollada como trabajo práctico
                        final del módulo de Desarrollo Web Frontend.
                    </p>
                </header>

                <div className="about-grid">

                    <div className="about-box">
                        <h3>Tecnologías</h3>
                        <ul>
                            <li>React</li>
                            <li>React Router DOM</li>
                            <li>Context API</li>
                            <li>JavaScript ES6</li>
                            <li>HTML5 + CSS3</li>
                        </ul>
                    </div>

                    <div className="about-box">
                        <h3>Funcionalidades</h3>
                        <ul>
                            <li>Registro de usuarios</li>
                            <li>Inicio de sesión</li>
                            <li>Lista de contactos</li>
                            <li>Envío de mensajes</li>
                            <li>Búsqueda de contactos</li>
                        </ul>
                    </div>

                    <div className="about-box">
                        <h3>Arquitectura</h3>
                        <p>
                            El estado global se maneja mediante <b>Context API</b>,
                            permitiendo compartir usuarios, mensajes y sesión entre
                            los componentes del chat.
                        </p>

                        <p>
                            La navegación se implementa usando
                            <b> React Router DOM</b>.
                        </p>
                    </div>

                </div>

                <footer className="about-footer">
                    <p>Proyecto desarrollado por Danyel Salazar</p>
                    <p className="registrarse" onClick={()=> navigate("/login")}>Inicicar sesion</p>
                </footer>

            </div>

        </section>
    )
}

export {About}