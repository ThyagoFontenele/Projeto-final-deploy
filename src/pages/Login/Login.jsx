import React, { useState } from 'react'
import './Login.css'
import BackPoint from '../../assets/images/back-point.svg'
import Logo from '../../assets/images/comesebebeslogo.svg'
import { Link } from 'react-router-dom'
import Input from '../../components/Input/Input'
import { handleLogin } from '../../service/api'
function Login() {
    const [EmailOrCpf, SetEmailOrcPF] = useState("");
    const [Password, SetPassword]  = useState("");

    const user = {
        "user":{
            "email": EmailOrCpf,
            "password": Password
        }
    }
    return (
        <>
            
            <div className="fundo-escuro"> 
                <Link to="/" id="logo"><img src={Logo} alt="logo comes e bebes" /></Link>
                <div className="login">
                    
                    <Link to="/"><img src={BackPoint} alt="seta-voltar"  className="back-point"/></Link>
                    <h1 className="realize-text">Realize seu login</h1>
                    <label className="usuario-text">E-mail ou CPF</label>
                    <Input type="text" placeholder="Usuário" id="input-login" className="input-usuario" value={EmailOrCpf} onChangeValue={SetEmailOrcPF} />
                    <br />
                    <label className="senha-text">Senha</label>
                    <Input type="password"  placeholder="Senha" id="input-login" className="input-senha" value={Password} onChangeValue={SetPassword}/>
                    <br />
                    <br />
                    <button onClick={() => handleLogin(user)} className="botao-entrar" >Entrar</button>
                    <br />
                    <Link to="/login/forgot-password" className="esqueci-senha">Esqueci minha senha</Link>
                </div>
            </div>
           
        </>
    )
}

export default Login
