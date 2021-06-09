import React from 'react'
import Login from '../Login/Login'
import './Forgot.css'
import { Link } from 'react-router-dom'
function Forgot() {
    return (
        <>
            <Login/>
            
            <div id="body-forgot">
                <div id="body-esqueci">
                    
                    <h1 id="esqueci-minha-senha-text">Esqueci minha senha</h1>
                    <object id="barra"></object>
                    <br />
                    <label id="label-mail">Email para recuperação</label>
                    <br />
                    <input type="mail" id="input-email" />
                    <br />
                    <button className="botoes">Enviar</button>
                    <Link to="/login"><button className="botoes">Fechar</button></Link>
                    
                </div>
            </div>
        </>
    )
}

export default Forgot
