import React from 'react'
import Star from '../../../assets/images/Star2.svg'
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
                    <img className="star1" src={Star} alt="estrela de avaliação"/>
                    <img className="star2" src={Star} alt="estrela de avaliação"/>
                    <img className="star3" src={Star} alt="estrela de avaliação"/>
                    <img className="star4" src={Star} alt="estrela de avaliação"/>
                    <img className="star5" src={Star} alt="estrela de avaliação"/>
                </div>
            </div>
        </div>
    )
}

export default CardAvRestaurante
