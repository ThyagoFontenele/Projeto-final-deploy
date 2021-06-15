import React from 'react'
import Header from '../../../components/Header/HeaderUserLogged/HeaderUserLogged'
import Footer from '../../../components/Footer/Footer'
import './WalletUser.css'
import '../../../components/BarStyle/BarStyle.css'
import CardFood from '../../../components/Cards/CardFood/CardFood'

function WalletUser() {
    return (
        <div>
            <Header/>

            <main className="wallet-user">
                <div className="wallet-user-title">
                    <h1 className="user-h1">Saldo disponível:</h1>
                    <p className="wallet-user-p">R$ 80,00</p>
                </div>

                <div>
                    <h3>Histórico de compras</h3>
                    <div className="user-cardfood-group">
                        <CardFood/>
                        <CardFood/>
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

export default WalletUser
