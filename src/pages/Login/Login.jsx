import React from 'react'
import './Login.css'
import BackPoint from '../../assets/images/back-point.svg'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <>
            
            <div className="fundo-escuro"> 
                <div className="login">
                    <Link to="/"><img src={BackPoint} alt="seta-voltar"  className="back-point"/></Link>
                    <h1 className="realize-text">Realize seu login</h1>
                    <label className="usuario-text">E-mail ou CPF</label>
                    <input type="text" placeholder="Usuário" className="input-usuario" />
                    <br />
                    <label className="senha-text">Senha</label>
                    <input type="password"  placeholder="Senha" className="input-senha"/>
                    <br />
                    <br />
                    <button className="botao-entrar">Entrar</button>
                    <br />
                    <Link><p className="esqueci-senha">Esqueci minha senha</p></Link>
                </div>
            </div>
        </>
    )
}

export default Login
