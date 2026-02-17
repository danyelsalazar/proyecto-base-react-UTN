// importamos reaact router dom

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { App } from "../pages/App"
import { NotFound } from "../pages/NotFound"
import { Login } from "../pages/Login"

const RouterApp = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export {RouterApp}