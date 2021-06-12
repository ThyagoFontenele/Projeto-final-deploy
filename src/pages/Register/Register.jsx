import React from 'react'
import './Register.css'
import BackPoint from '../../assets/images/back-point.svg'
import { Link } from 'react-router-dom'
//Import Components
import Logo from '../../assets/images/comesebebeslogo.svg'
import '../../components/Botao/Button.css'


function Register() {
    return (
        <div>
            <div id="register-page">
                <Link to="/" id="logo"><img src={Logo} alt="logo comes e bebes" /></Link>
                <form className="register">
                    <Link to="/"><img src={BackPoint} alt="seta-voltar"  className="back-point-register"/></Link>
                    <h1 id="cadastre-se">Cadastre-se</h1>
                    <br />
                    <label className="labels">Nome</label>
                    <label className="label-sobrenome">Sobrenome</label>
                    <br />
                    <input type="text" className="input-nome"/>
                    <input type="text" className="input-sobrenome" />
                    <br />
                    <label className="labels">E-mail</label>
                    <br />
                    <input type="email" className="input-mail" id="input" />
                    <br />
                    <label className="labels">CPF</label>
                    <br />
                    <input type="text" className="input-cpf" id="input" />
                    <br />
                    <label className="labels-2">Data de nascimento</label><label id="telefone">Telefone</label>
                    <br />
                    <input type="date" className="input-data" />
                    <input type="text" className="input-telefone"  />
                    <br />
                    <label className="label-usuario">Tipo de Usuário</label>
                    <br />
                    <select id="user-type">
                        <option></option>
                        <option>Cliente</option>
                        <option>Entregador</option>
                    </select>
                    <label  className="labels-2">CEP</label>
                    <label className="label-complemento">Complemento</label>
                    <br />
                    <input type="text"  className="input-cep"/>
                    <input type="text" className="input-complemento"/>
                    <br />
                    <label className="labels">Número</label>
                    <label className="label-rua">Rua</label>
                    <br />
                    <input type="text" className="input-rua"/>
                    <input type="text"className="input-numero" />
                    <br />
                    <label className="labels">Senha</label><label className="labels-confirmar-senha">Confirmação Senha</label>
                    <br />
                    <input type="password" className="input-cadastro-senha"/>
                    <input type="password" className="input-confirmar-senha" />
                    <br />
                    <input type="submit" id="botao-cadastrar" value="Cadastrar"/>
                </form>
        </div>
        </div>
    )
}

export default Register
