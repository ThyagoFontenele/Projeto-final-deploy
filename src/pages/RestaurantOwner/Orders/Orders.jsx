import React from 'react'
import Header from '../../../components/Header/HeaderRestaurant/HeaderRestaurant'
import Footer from '../../../components/Footer/Footer'
import CardOrder from '../../../components/Cards/CardOrder/CardOrder'
import './Orders.css'

function Orders() {
    return (
        <div>
            <Header/>

            <main>
                <div>
                    <h1 className="user-h1">Pedidos</h1>
                    <div className="barra-style"></div>
                </div>

                <div className="orders-card-group">
                    <CardOrder/>
                    <CardOrder/>
                    <CardOrder/>
                    <CardOrder/>
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export default Orders
