import React from 'react'
import '../CardsHome.css'
import ArrowNext from '../../../assets/images/next-point.svg'
import { Link } from 'react-router-dom'

function Card1() {
    return (
        <div>
            <div className="cards-home">
                <div className="card-up">

                </div>
                <div className="card-down">
                    <p>
                        Está com fome?
                        <br/>
                        Crie sua conta!
                    </p>
                    <Link className="arrow-home" to="/register"><img src={ArrowNext} alt="arrow next"/></Link>
                </div>
            </div>
        </div>
    )
}

export default Card1
