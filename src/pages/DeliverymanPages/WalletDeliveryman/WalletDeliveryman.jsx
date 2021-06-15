import React from 'react'
import Header from '../../../components/Header/HeaderUserLogged/HeaderUserLogged'
import Footer from '../../../components/Footer/Footer'
import Voltar from '../../../assets/images/before-point.svg'
import './WalletDeliveryman.css'
import CardFood from '../../../components/Cards/CardFood/CardFood'

function WalletDeliveryman() {
    return (
        <div>
            <Header/>

            <main className="wallet-deliveryman">
                <div className="wallet-deliveryman-header">
                    <img src={Voltar} alt="" />
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
