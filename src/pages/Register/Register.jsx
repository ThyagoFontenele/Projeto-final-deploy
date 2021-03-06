import React, { useState } from 'react'
import './Register.css'
import BackPoint from '../../assets/images/back-point.svg'
import { Link } from 'react-router-dom'
//Import Components
import Logo from '../../assets/images/comesebebeslogo.svg'
import '../../components/Botao/Button.css'
import { createUser } from '../../service/api'
import Input from '../../components/Input/Input'


function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCPF] = useState("");
    const [BirthDate, setBithDate] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [cep, setCep] = useState("");
    const [Complemento, SetComplemento] = useState("");
    const [RoadNumber, setRoadNumber] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [rua, setRua] = useState("");
    const [UserType, setUsertype] = useState("2");
    const toggle = () => {
        if(UserType == "2"){
            setUsertype("3")
        }
        else{
            setUsertype("2")
        }
    }
    
    const user = {
        "adress": {
            "cep": cep,
            "street": rua,
            "district":"RJ",
            "city": "niterói",
            "number": RoadNumber,
            "complement": Complemento
        },
        "user":{
            "name": name,
            "email": email,
            "birthdate": BirthDate,
            "phone": PhoneNumber,
            "cpf": cpf, 
            "role": UserType,
            "password": Password,
            "password_confirmation": ConfirmPassword
        }
    }


    return (
        <>
            <div id="register-page">
                <Link to="/" id="logo"><img src={Logo} alt="logo comes e bebes" /></Link>
                <div className="register">
                    <Link to="/"><img src={BackPoint} alt="seta-voltar"  className="back-point-register"/></Link>
                    <h1 id="cadastre-se">Cadastre-se</h1>
                    <br />
                    <label className="labels">Nome</label>
                    <br />
                    <Input type="text" name="input-nome" placeholder="Fulano de tal" id="input" value={name} onChangeValue={setName}/>
                    <br />
                    <label className="labels">E-mail</label>
                    <br />
                    <Input type="email" name="input-mail" placeholder="Fulano@gmail.com" id="input" value={email} onChangeValue={setEmail}/>
                    <br />
                    <label className="labels">CPF</label>
                    <br />
                    <Input type="text" name="input-cpf" id="input" placeholder="11111111111" value={cpf} onChangeValue={setCPF}/>
                    <br />
                    <label className="labels-2">Data de nascimento</label><label id="telefone">Telefone</label>
                    <br />
                    <Input type="date" name="input-data" value={BirthDate} onChangeValue={setBithDate}/>
                    <Input type="text" name="input-telefone" placeholder="21985498343" value={PhoneNumber} onChangeValue={setPhoneNumber}/>
                    <br />
                    <label className="label-usuario">Tipo de Usuário</label>
                    <br />
                    <select id="user-type" onChange={toggle} >
                        <option>Usuário</option>
                        <option>Entregador</option>
                    </select>
                    <label  className="labels-2">CEP</label>
                    <label className="label-complemento">Complemento</label>
                    <br />
                    <Input type="text"  name="input-cep" placeholder="2403912" value={cep} onChangeValue={setCep}/>
                    <Input type="text" name="input-complemento" placeholder="Prédio verde, ap 101" value={Complemento} onChangeValue={SetComplemento}/>
                    <br />
                    <label className="labels">Número</label>
                    <label className="label-rua">Rua</label>
                    <br />
                    <Input type="text" name="input-numero" placeholder="222" value={RoadNumber} onChangeValue={setRoadNumber} />
                    <Input type="text" name="input-rua" placeholder="Rua dos bobos" value={rua} onChangeValue={setRua}/>
                    <br />
                    <label className="labels">Senha</label><label className="labels-confirmar-senha">Confirmar Senha</label>
                    <br />
                    <Input type="password" name="input-cadastro-senha" placeholder="Senha" value={Password} onChangeValue={setPassword}/>
                    <Input type="password" name="input-confirmar-senha" placeholder="Confirmar Senha" value={ConfirmPassword} onChangeValue={setConfirmPassword}/>
                    <br />
                    <button id="botao-cadastrar" onClick={() => createUser(user)}>Cadastrar</button>
                </div>
            </div>
        </>
    )
}

export default Register
