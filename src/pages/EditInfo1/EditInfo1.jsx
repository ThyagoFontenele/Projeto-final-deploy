import React from 'react'
import './EditInfo1.css'
import Header from '../../components/Header/HeaderDeliveryman/HeaderDeliveryman'
import ArrowBefore from '../../assets/images/before-point.svg'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

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
                        <h2>Editar Dados</h2>
                    </div>
                </div>

                <div>
                    <form action="">
                        <label htmlFor="">Nome</label><br />
                        <input type="text" />
                    </form>
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export default EditInfo1
