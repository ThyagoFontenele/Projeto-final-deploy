import React from 'react'
import Header from '../../components/Header/HeaderUserLogged/HeaderUserLogged'
import Footer from '../../components/Footer/Footer'

function WalletB() {
    return (
        <div>
            <Header/>

            <main>
                <div>
                    <h1 className="user-h1">Saldo disponível:</h1>
                    <p>R$ 240,00</p>
                </div>

                <div>
                    
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export default WalletB
