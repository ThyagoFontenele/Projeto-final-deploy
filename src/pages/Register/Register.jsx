import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import BackPoint from '../../assets/images/back-point.svg'
function Register() {
    return (
        <>
            <div className="register">
                <Link to="/"><img src={BackPoint} alt="seta-voltar"  className="back-point-register"/></Link>
                <h1 id="cadastre-se">Cadastre-se</h1>
                <br />
                <label id="labels">Nome</label>
                <br />
                <input type="text"  id="input"/>
                <br />
                <label id="labels">E-mail</label>
                <br />
                <input type="email" className="input-mail" id="input"/>
                <br />
                <label id="labels">CPF</label>
                <br />
                <input type="text" className="input-cpf" id="input"/>
                <br />
                <label id="labels">Data de nascimento</label><label id="telefone">Telefone</label>
                <br />
                <input type="date" className="date" />
                <input type="text" className="phone-number" />
                <br />
                <label id="labels">Tipo de Usuário</label>
                <br />
                <select id="user-type">
                    <option></option>
                    <option>Usuário</option>
                    <option>Entregador</option>
                </select>
                <br />
                <label  id="labels">Endereço</label>
                <br />
                <input type="text" id="input"/>
                <br />
                <label id="labels">Senha</label><label>Confirmação Senha</label>
                <br />
                <input type="password" />
                <input type="password" />
                <br />
                <button>Cadastrar</button>
            </div>
        </>
    )
}

export default Register
