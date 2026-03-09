import { useNavigate } from "react-router-dom"

const NotFound = ()=>{
    const navigate = useNavigate();

    return(
        <section className="not-fund">
            <h1>404 the page not found</h1>
            <button className="volver-home" onClick={()=> navigate("/login")}>Volver a login</button>
        </section>
    )
}

export {NotFound}