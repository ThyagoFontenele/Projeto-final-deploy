import React from 'react'
import './CardFood.css'

function CardFood() {
    return (
        <div className="cardfood">
            <div>
                <h4>Coxinha de Jaca</h4>
                <p className="cardfood-p-restaurant">Restaurante 1</p>
            </div>
            <div>
                <p className="cardfood-p-price">R$ 8,00</p>
            </div>
        </div>
    )
}

export default CardFood
