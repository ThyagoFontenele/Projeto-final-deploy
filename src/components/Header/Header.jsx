import React from 'react'
import Logo from '../../assets/images/comesebebeslogo.svg'
import Botao from '../Botao/Botao'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div>
            <header>
                <nav>
                    <div>
                        <img src={Logo} alt="Logo de Comes e Bebes"/>
                    </div>

                    <div>
                        <ul>
                            <li><Link to="/register">Cadastre-se</Link></li>
                            <li><Link to="/login"><Botao label="Entrar"/></Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
