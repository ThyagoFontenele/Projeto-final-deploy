import React from 'react'
import Header from '../../components/Header/HeaderUserLogged/HeaderUserLogged'
import Footer from '../../components/Footer/Footer'
import './WalletUser.css'
import '../../components/BarStyle/BarStyle.css'

function WalletUser() {
    return (
        <div>
            <Header/>

            <main className="wallet-user">
                <div>
                    <h1 className="user-h1">Saldo disponível:</h1>
                    <p>R$ 80,00</p>
                </div>

                <div>
                    <h3>Histórico de compras</h3>
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

export default WalletUser
