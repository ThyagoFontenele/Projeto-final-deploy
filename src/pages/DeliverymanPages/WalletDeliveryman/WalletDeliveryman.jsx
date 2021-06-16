import React from 'react'
import Header from '../../../components/Header/HeaderDeliveryman/HeaderDeliveryman'
import Footer from '../../../components/Footer/Footer'
import Voltar from '../../../assets/images/before-point.svg'
import './WalletDeliveryman.css'
import CardFood from '../../../components/Cards/CardFood/CardFood'
import { Link } from 'react-router-dom'
function WalletDeliveryman() {
    return (
        <div>
            <Header/>

            <main className="wallet-deliveryman">
                <div className="wallet-deliveryman-header">
                    <Link to="/deliveryman/page"><img className="back-edit-user" src={Voltar} alt="" /></Link>
                    <h1 className="user-h1">Saldo disponível:</h1>
                    <p className="wallet-deliveryman-wallet-p">R$ 240,00</p>
                </div>

                <div>
                    <h3 className="deliveries-history-h3">Histórico de entregas</h3>
                    <div className="wallet-deliveryman-cardfood-group">
                        <CardFood/>
                        <CardFood/>
                        <CardFood/>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export default WalletDeliveryman
