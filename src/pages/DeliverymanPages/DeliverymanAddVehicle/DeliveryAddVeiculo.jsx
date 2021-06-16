import React, { useState } from 'react'
import Login from '../../Login/Login'
import Input from '../../../components/Input/Input'
import { AdicionarVeiculo } from '../../../service/api'
import './DeliveryAddVeiculo.css'
function DeliveryAddVeiculo() {
    const [Email, setEmail] = useState("");
    const [Veiculo, setVeiculo] = useState("");
    const [License, setLicense] = useState("");
    const info = {
        "deliveryman":{
            "email": Email,
            "vechicle": Veiculo,
            "license": License
        }
    }

    return (
        <>
            <Login/>
            <div id="body-add-veiculo">
                <div id="body-validacao">
                        <h1 id="validacao-entregador-text">Validação de entregador</h1>
                        <object id="barra-branca"></object>
                        <p id="p-bem-vindo">Bem vindo entregador! Agora, precisamos das seguintes informações para validar seu acesso a plataforma</p>
                        <br />
                        <label id="label-verificacao">Adicione o modelo do seu veiculo</label>
                        <br />
                        <Input type="text" id="input-verificacao" value={Veiculo} onChangeValue={setVeiculo} />
                        <br />
                        <label id="label-verificacao">CNH</label>
                        <br />
                        <Input type="text"  id="input-verificacao" value={License} onChangeValue={setLicense}/>
                        <br />
                        <label id="label-verificacao-email">E-mail</label>
                        <Input type="mail" id="input-verificacao" value={Email} onChangeValue={setEmail}/>
                        <button className="botoes-verificacao" onClick={() => AdicionarVeiculo(info)}>Enviar</button>
                </div>
            </div>
        </>
    )
}

export default DeliveryAddVeiculo
