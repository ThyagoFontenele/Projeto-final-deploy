import React from 'react'
import '../EditInfoUser/EditInfo.css'
import Header from '../../../components/Header/HeaderAdmin/HeaderAdmin'
import Footer from '../../../components/Footer/Footer'
import ArrowBefore from '../../../assets/images/before-point.svg'
import { Link } from 'react-router-dom'


function EditInfoAdmin() {
    return (
        <>
            <Header/>
            <main>
                    <div>
                    <Link className="back-edit-user" to="/user-page"><img src={ArrowBefore} alt="arrow next"/></Link>
                        <h2 className="user-h1">Editar Dados</h2>
                        <div className="barra-style"></div>
                    </div>
               

                <div>
                    <form className="container-edit">
                        <label id="labels">Nome</label><br />
                        <input type="text" className="edit-user-input-nome" id="inputs"/><br />
                        <br />
                        <label id="labels">E-mail</label><br />
                        <input type="mail" className="edit-user-input-email" id="inputs"/><br />
                        <br />
                        <label id="labels">CPF</label>
                        <br />
                        <label  className="edit-user-cpf">111.111.111.-11</label>
                        <br />
                    
                        <label id="labels">Data de Nascimento</label>
                        <label id="labels" className="edit-label-telefone">Telefone</label>
                        <br />
                        <label className="edit-user-date">11/11/1111</label><input type="text" className="edit-user-input-telefone" id="inputs" />
                        <br />
                        <label id="labels">CEP</label><label id="labels" className="edit-label-complemento">Complemento</label>
                        <br />
                        <input type="text" className="edit-user-input-cep" id="inputs"/>
                        <input type="text" className="edit-user-input-complemento" id="inputs"/>
                        <br />
                        <label id="labels">Número</label>
                        <label id="labels" className="edit-label-rua">Rua</label>
                        <br />
                        <input type="text" className="edit-user-input-numero" id="inputs"/>
                        <input type="text" className="edit-user-input-rua" id="inputs"/>
                        <br />
                        <button className="edit-user-edit">Editar</button>
                        
                    </form>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default EditInfoAdmin
