import React from 'react'
import Logo from '../../../assets/images/comesebebeslogo.svg'
import Botao from '../../Botao/Botao'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div>
            <header className="header-home-page">
                <nav className="header-nav-home-page">
                    <div>
                        <Link to="/" ><img src={Logo} alt="Logo de Comes e Bebes" /></Link>
                    </div>

                    <ul className="header-nav-menu-home-page">
                        <li><Link to="/register">Cadastre-se</Link></li>
                        <li><Link to="/login"><Botao label="Entrar"/></Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
