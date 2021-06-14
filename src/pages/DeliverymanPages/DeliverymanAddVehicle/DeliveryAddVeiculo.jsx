import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../../Login/Login'
import './DeliveryAddVeiculo.css'
function DeliveryAddVeiculo() {
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
                        <input type="mail" id="input-verificacao" />
                        <br />
                        <label id="label-verificacao">CNH</label>
                        <br />
                        <input type="text"  id="input-verificacao"/>
                        <br />
                        <Link to="/login"><button className="botoes-verificacao">Enviar</button></Link>
                </div>
            </div>
        </>
    )
}

export default DeliveryAddVeiculo
