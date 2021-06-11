import React from 'react'
import './EditInfo1.css'
import Header from '../../../components/Header/HeaderUserOnly/HeaderUserOnly'
import ArrowBefore from '../../../assets/images/before-point.svg'
import { Link } from 'react-router-dom'
import Footer from '../../../components/Footer/Footer'

function EditInfo1() {
    return (
        <div>
            <header>
                <Header/>
            </header>

            <main>
                <div>
                    <div>
                        <Link className="arrow-home" to="/register"><img src={ArrowBefore} alt="arrow next"/></Link>
                    </div>

                    <div>
                        <h2 className="user-h1">Editar Dados</h2>
                    </div>
                </div>

                <div>
                    <form action="">
                        <label htmlFor="">Nome</label><br />
                        <input type="text" /><br />

                        <br />

                        <label htmlFor="">Email</label><br />
                        <input type="text" /><br />

                        <label htmlFor="">CPF</label><br />
                        <p>111.111.111.-11</p><br />

                        <br />

                        <label htmlFor="">Data de nascimento</label><br />
                        <input type="text" /><br />

                        <br />

                        <label htmlFor="">Telefone</label><br />
                        <input type="text" />

                        <br />

                        <label htmlFor="">Endereço</label><br />
                        <input type="text" /><br />
                        
                        <div>
                            <button>Excluir Perfil</button>
                            <button>Editar</button>
                        </div>
                    </form>
                </div>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default EditInfo1
