"use client"
import React, { useState } from "react";
import Login from "./login"; // Cambia el nombre del archivo a Login
import Register from "./Registro"; // Cambia el nombre del archivo a Register

const IndexPage = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleRegisterClick = () => {
        setShowRegister(true);
    };

    const handleCloseLogin = () => {
        setShowLogin(false);
    };
    const handleCloseRegister = () => {
        setShowRegister(false);
    };

    return (
        <div>
            <button onClick={handleLoginClick}>Iniciar Sesión</button>
            <br />
            <button onClick={handleRegisterClick}>Registro</button>
            {showLogin && <Login onClose={handleCloseLogin} />}
            {showRegister && <Register onClose={handleCloseRegister} />}
        </div>
    );
};

export default IndexPage;
