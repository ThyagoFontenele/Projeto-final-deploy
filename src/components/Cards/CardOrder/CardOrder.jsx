import React from 'react'
import './CardOrder.css'

function CardOrder() {
    return (
        <div className="card-order">
            <div className="card-order-info">
                <h3 className="card-order-info-dish">Coxinha de Jaca</h3>
                <p className="card-order-info-status">Status: Em preparo</p>
            </div>
            <div>
                <p className="card-order-done">Marcar como feito</p>
            </div>
        </div>
    )
}

export default CardOrder
