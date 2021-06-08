import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import BackPoint from '../../assets/images/back-point.svg'
import HeaderImg from '../../components/Header/HeaderOnlyImg/HeaderImg'
function Register() {
    return (
        <div id="register-page">
            <HeaderImg/>
            <div className="register">
                <Link to="/"><img src={BackPoint} alt="seta-voltar"  className="back-point-register"/></Link>
                <h1 id="cadastre-se">Cadastre-se</h1>
                <br />
                <label className="labels">Nome</label>
                <br />
                <input type="text"  id="input" placeholder="Fulano de Tal"/>
                <br />
                <label className="labels">E-mail</label>
                <br />
                <input type="email" className="input-mail" id="input" placeholder="XxXxX@mail.com"/>
                <br />
                <label className="labels">CPF</label>
                <br />
                <input type="text" className="input-cpf" id="input" placeholder="11111111111"/>
                <br />
                <label className="labels-2">Data de nascimento</label><label id="telefone">Telefone</label>
                <br />
                <input type="date" className="date" />
                <input type="text" className="phone-number" placeholder="DD9XXXXXXXX" />
                <br />
                <label className="labels-2">Tipo de Usuário</label>
                <br />
                <select id="user-type">
                    <option></option>
                    <option>Cliente</option>
                    <option>Entregador</option>
                </select>
                <label  className="labels-2">Endereço</label>
                <br />
                <input type="text"  className="input-endereco" placeholder=""/>
                <br />
                <label className="labels-2">Senha</label><label className="label-confirmar-senha">Confirmação Senha</label>
                <br />
                <input type="password" className="input-cadastro-senha" placeholder="Senha"/>
                <input type="password" className="input-confirmar-senha" placeholder="Confirmar Senha"/>
                <br />
                <button id="botao-cadastrar">Cadastrar</button>
            </div>
        </div>
    )
}

export default Register
