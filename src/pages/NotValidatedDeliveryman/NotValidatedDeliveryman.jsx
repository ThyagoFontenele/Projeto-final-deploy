import React from 'react'
import Header from '../../components/Header/HeaderUserOnly/HeaderUserOnly'
import Card from '../../components/Cards/CardRestauranteEntrega/CardRestauranteEntrega'
import Footer from '../../components/Footer/Footer'
import './NotValidatedDeliveryman.css'

function NotValidatedDeliveryman() {
    return (
        <div>
            <Header/>

            <main>
                <div className="not-validated-message">
                    Você ainda não foi validado!
                </div>
                <div>
                    <h1 className="user-h1">Entregas disponíveis</h1>
                    <div className="cards-group-deliveryman opacity-50">
                        <Card className="card"/>
                        <Card className="card"/>
                        <Card className="card"/>
                        <Card className="card"/>
                    </div>
                </div>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default NotValidatedDeliveryman
