import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <>
            <div className="header-home">
                <nav>
                    <Link to="/register"><p id="cadastre-link">Cadastre-se</p></Link>
                    <Link to="/login"><button id="botao-entrar">Entrar</button></Link>
                </nav>
            </div>
            
        </>
         
    )
}

export default Header
