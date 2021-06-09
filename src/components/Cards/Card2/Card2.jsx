import React from 'react'
import '../CardsHome.css'
import ArrowNext from '../../../assets/images/next-point.svg'
import { Link } from 'react-router-dom'

function Card2() {
    return (
        <div>
            <div className="cards-home">
                <div className="card-up">

                </div>
                <div className="card-down">
                    <p>
                        É entregador?
                        <br />
                        Faça seu cadastro!
                        </p>
                    <Link className="arrow-home" to="/register"><img src={ArrowNext} alt="arrow next"/></Link>
                </div>
            </div>
        </div>
    )
}

export default Card2
