import React from 'react'
import Header from '../../components/Header/HeaderUserLogged/HeaderUserLogged'
import Footer from '../../components/Footer/Footer'
import Voltar from '../../assets/images/before-point.svg'
import './WalletDeliveryman.css'

function WalletDeliveryman() {
    return (
        <div>
            <Header/>

            <main className="wallet-deliveryman">
                <div>
                    <img src={Voltar} alt="" />
                    <h1 className="user-h1">Saldo disponível:</h1>
                    <p>R$ 240,00</p>
                </div>

                <div>
                    <h3>Histórico de entregas</h3>
                    <div>
                        {/* 
                        - card
                        - card
                        - card
                        - card
                        - card
                        */}
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export default WalletDeliveryman
