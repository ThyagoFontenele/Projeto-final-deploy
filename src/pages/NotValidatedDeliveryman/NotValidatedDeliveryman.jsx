import React from 'react'
import Header from '../../components/Header/HeaderDeliveryman/HeaderDeliveryman'
import Footer from '../../components/Footer/Footer'

function NotValidatedDeliveryman() {
    return (
        <div>
            <header>
                <Header/>
            </header>

            <main>
                <h1 className="user-h1">Entregas disponíveis</h1>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default NotValidatedDeliveryman
