// importamos reaact router dom

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { App } from "../pages/App"
import { NotFound } from "../pages/NotFound"
import { Login } from "../pages/Login"
import {Register} from "../pages/Register"
import { RouteProtected } from "../components/RouteProtected"
import { About } from "../pages/About"

const RouterApp = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/acerca" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registro" element={<Register/>}/>
                <Route path="/" element={<RouteProtected><App/></RouteProtected>}/>
                <Route path="/chat/:id" element={<RouteProtected><App/></RouteProtected>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export {RouterApp}