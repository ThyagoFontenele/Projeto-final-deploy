import React from 'react'
import './MenuUser.css'
import { Link } from 'react-router-dom'

function MenuUser(props) {
    return (props.trigger) ? (
        <div>
          <nav id="menu-container">
                <div>
                    <h1>Olá, Usuário</h1>
                    <p>Carteira</p>
                    <p>Editar dados</p>
                    <Link to="/"><p>Sair</p></Link>
                </div>
            </nav>   
        </div>
    ) : "";
}

export default MenuUser
