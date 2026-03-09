import { useNavigate } from "react-router-dom"

const About = () => {
    const navigate = useNavigate()
    return(
        <section className="container-about">

            <div className="about-card">

                <header className="about-header">
                    <h1>Chat UTN</h1>
                    <p>
                        Este proyecto consiste en el desarrollo de una aplicación web de mensajería creada con React. La aplicación permite visualizar una lista de contactos, abrir conversaciones y enviar mensajes dentro de una interfaz similar a la de aplicaciones de chat actuales.
                    </p>
                    <br />
                    <p>El objetivo del proyecto es aplicar conceptos de desarrollo frontend, como el uso de componentes, manejo de estado, navegación entre páginas y validación de formularios.</p>
                </header>

                <div className="about-grid">

                    <div className="about-box">
                        <h3>Partes principales de la aplicación</h3>
                        <p><b>Lista de contactos</b> Muestra los usuarios disponibles para iniciar una conversación. Incluye un buscador que permite filtrar contactos por nombre o apellido.</p>
                        <br />
                        <p><b>Panel de chat</b> Permite visualizar los mensajes de la conversación seleccionada y enviar nuevos mensajes. Los mensajes se diferencian según si fueron enviados por el usuario o por el contacto.
                        </p>
                        <br />
                        <p><b>Registro e inicio de sesion</b> La aplicación cuenta con formularios para registrar nuevos usuarios y para iniciar sesión, incluyendo validaciones básicas de los datos ingresados.</p>
                        <br />
                        <p><b>Sistema de navegacion</b> Se utilizan rutas dinámicas para acceder a cada chat mediante una URL específica.</p>
                    </div>

                    <div className="about-box">
                        <h3>Tecnologías</h3>
                        <ul>
                            <li>React</li>
                            <li>React Router DOM</li>
                            <li>Context API</li>
                            <li>JavaScript ES6</li>
                            <li>HTML5 + CSS3</li>
                            <li>LocaStorage </li>
                        </ul>
                    </div>

                    <div className="about-box">
                        <h3>Decisiones de desarrollo tomadas</h3>
                        <p>
                            Decidi utilizar <b>Context API</b> para manejar el estado global de la aplicación, permitiendo compartir información entre los distintos componentes.
                        </p>
                        <br />
                        <p>
                            También implemente rutas dinámicas con <b>React Router</b> para representar cada conversación mediante una URL única.
                        </p>
                        <br />
                        <p>
                            El diseño se desarrolló siguiendo un enfoque <b>simple y responsivo</b>, adaptándose tanto a pantallas de escritorio como a dispositivos móviles.
                        </p>
                    </div>

                    <div className="about-box">
                        <h3>Observaciones personales</h3>
                        <p>
                            El desarrollo de este proyecto permitió aplicar de forma práctica los conceptos aprendidos durante la cursada, especialmente en la creación de componentes reutilizables, manejo del estado y navegación dentro de una aplicación React.
                        </p>
                    </div>

                    <div className="about-box">
                        <h3>Dificultades encontradas</h3>
                        <p>
                            Una de las principales dificultades fue gestionar correctamente el estado compartido entre los componentes del chat, así como implementar la navegación y el comportamiento responsivo de la aplicación en dispositivos móviles.
                        </p>
                    </div>

                </div>

                <footer className="about-footer">
                    <p>Proyecto desarrollado por Danyel Salazar</p>
                    <p className="registrarse" onClick={()=> navigate("/login")}>Iniciar sesion</p>
                </footer>

            </div>

        </section>
    )
}

export {About}