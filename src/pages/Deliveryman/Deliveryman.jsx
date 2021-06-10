import React from 'react'
import './Deliveryman.css'
//Import Components
import Header from '../../components/Header/HeaderDeliveryman/HeaderDeliveryman'
import Card from '../../components/Cards/CardRestauranteEntrega/CardRestauranteEntrega'
import Footer from '../../components/Footer/Footer'


function Deliveryman() {
    return (
        <div>
            <Header/>

            <main className="deliveryman-corpo">
                <div>
                    <h1 className="user-h1">Entregas disponíveis</h1>
                    <object  id="barra-branca-entregas"></object>
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
