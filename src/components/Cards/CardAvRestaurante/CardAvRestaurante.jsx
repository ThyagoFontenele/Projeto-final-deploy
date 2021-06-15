import React from 'react'
import YellowStar from '../../../assets/images/yellow-star-b.svg'
import './CardAvRestaurante.css'

function CardAvRestaurante() {
    return (
        <div className="card-av-restaurante">
            <div className="card-av-restaurante-image">

            </div>
            <div>
                <p>Restaurante</p>
                <p>Comida Vegana</p>
                <div>
                    <img src={YellowStar} alt="estrela de avaliação"/>
                    <img src={YellowStar} alt="estrela de avaliação"/>
                    <img src={YellowStar} alt="estrela de avaliação"/>
                    <img src={YellowStar} alt="estrela de avaliação"/>
                    <img src={YellowStar} alt="estrela de avaliação"/>
                </div>
            </div>
        </div>
    )
}

export default CardAvRestaurante
