"use client"
import { useState } from "react"
import Login from "./login"

const IndexPage=()=>{
    const [showLogin, setShowLogin]= useState(false)
    const [showRegister, setShowRegister]= useState(false)

    const handleLoginClick = ()=>{
        setShowLogin(true)
    }
    const handleRegisterClick= ()=>{
        setShowRegister(true)
    }
    const handleCloseLogin =()=>{
        setShowLogin(false)
    }
    return(
        <div>
            <button onClick={handleLoginClick} >Iniciar Sesion</button>
            <br />
            <button onClick={handleRegisterClick}>Registro</button>
            {showLogin && <Login onClose = {handleCloseLogin}/>}
         </div>
    )
}

export default IndexPage