import React from 'react'
import Header from '../../components/Header/HeaderDeliveryman/HeaderDeliveryman'
import Card from '../../components/Cards/CardRestauranteEntrega/CardRestauranteEntrega'
import Footer from '../../components/Footer/Footer'
import './Deliveryman.css'

function Deliveryman() {
    return (
        <div>
            <Header/>

            <main className="deliveryman-corpo">
                <div>
                    <h2>Entregas disponíveis</h2>
                </div>

                <div className="cards-group-deliveryman">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </main>

            <Footer/>

        </div>
    )
}

export default Deliveryman
