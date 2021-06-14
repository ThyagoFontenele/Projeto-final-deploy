import React, { useState } from 'react'
import './Register.css'
import BackPoint from '../../assets/images/back-point.svg'
import { Link } from 'react-router-dom'
//Import Components
import Logo from '../../assets/images/comesebebeslogo.svg'
import '../../components/Botao/Button.css'
import { createUser } from '../../service/api'


function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCPF] = useState("");
    const [BirthDate, setBithDate] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [TypeUser, setTypeUser] = useState("");
    const [cep, setCep] = useState("");
    const [Complemento, SetComplemento] = useState("");
    const [RoadNumber, setRoadNumber] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");


    const user = {  "user": {


    }}

    return (
        <div>
            <div id="register-page">
                <Link to="/" id="logo"><img src={Logo} alt="logo comes e bebes" /></Link>
                <form className="register">
                    <Link to="/"><img src={BackPoint} alt="seta-voltar"  className="back-point-register"/></Link>
                    <h1 id="cadastre-se">Cadastre-se</h1>
                    <br />
                    <label className="labels">Nome</label>
                    <br />
                    <input type="text" className="input-nome" id="input" value={name} onChange={(e) => setName(e.target.value)}/>
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
                    <label className="labels">Senha</label><label className="labels-confirmar-senha">Confirmar Senha</label>
                    <br />
                    <input type="password" className="input-cadastro-senha"/>
                    <input type="password" className="input-confirmar-senha" />
                    <br />
                    <button id="botao-cadastrar" onClick={() => createUser(user)}>Cadastrar</button>
                </form>
        </div>
        </div>
    )
}

export default Register
