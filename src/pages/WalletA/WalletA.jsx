import React from 'react'
import Header from '../../components/Header/HeaderUserLogged/HeaderUserLogged'
import Footer from '../../components/Footer/Footer'

function WalletA() {
    return (
        <div>
            <Header/>

            <main>
                <div>
                    <h1 className="user-h1">Saldo disponível:</h1>
                    <p>R$ 80,00</p>
                </div>

                <div>
                    
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export default WalletA
