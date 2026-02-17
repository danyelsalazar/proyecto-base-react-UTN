// importamos reaact router dom

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { App } from "../pages/App"
import { NotFound } from "../pages/NotFound"
import { Login } from "../pages/Login"
import {Register} from "../pages/Register"

const RouterApp = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export {RouterApp}