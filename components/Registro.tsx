"use client"
import Link from "next/link"
import { useState } from "react"

const Register = (props: { onClose: any }) => { // Destructuring props correctly
  const { onClose } = props; // Destructuring props

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handledRegister = () => {
    console.log(`Login con correo: ${email}, contraseña: ${password}`)
  }

  return (
    <div>
      <div>
        <h2>Iniciar sesion</h2>
        <label htmlFor="email">Correo: </label>
        <input type="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
        <button onClick={handledRegister}>Iniciar Sesion</button>
        <p>No tienes cuenta?<Link href="/pages/registro" passHref>Registrate</Link></p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  )
}

export default Register;