"use client"
import Link from "next/link";
import { useState } from "react";


const Register =()=>{
    const [email, setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handledRegister = ()=>{
        console.log('Login con correo: ${email}, contraseña: ${password}')
    }

    return(
        <div>
            <div >
                <h2>Registro</h2>
                <label htmlFor="email">Correo: </label>
                <input type="email" id="email" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                <button onClick={handledRegister}>Registrar</button>
                <p>Ya tienes cuenta?<Link href="./login"passHref>Login</Link></p>
            </div>
        </div>
    )
}
 export default Register