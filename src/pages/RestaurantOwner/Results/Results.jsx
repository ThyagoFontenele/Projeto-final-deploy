import React from 'react'
import Header from '../../../components/Header/HeaderRestaurant/HeaderRestaurant'
import Footer from '../../../components/Footer/Footer'
import Dollar from '../../../assets/images/dollar-sign.png'
import YellowStar from '../../../assets/images/yellow-star-a.svg'
import RedStar from '../../../assets/images/red-star.svg'
import BeforeArrow from '../../../assets/images/before-point.svg'
import AfterArrow from '../../../assets/images/next-point.svg'
import './Results.css'

function Results() {
    return (
        <div>
            <Header/>

            <main>
                <div>
                    <h1 className="user-h1">Resultados</h1>
                    <div className="barra-style"></div>
                </div>

                <div className="results-card-group">
                    <div className="results-card-group-row">

                        <div className="results-card-item">
                            <div className="results-card-item-title">
                                <h3>Valor total em Vendas</h3>
                            </div>
                            <div className="results-card-item-content-A">
                                <div>
                                    <img className="results-card-item-content-img" src={Dollar} alt="Cifrão"/>
                                </div>
                                <div>
                                    <p className="results-card-item-content-value">10.000</p>
                                </div>
                            </div>
                        </div>

                        <div className="results-card-item">
                            <div className="results-card-item-title">
                                <h3>Avaliação média Restaurante 1</h3>
                            </div>
                            <div className="results-card-item-content-B">
                                <div className="results-card-item-content-review">
                                    <span>4.1</span>
                                </div>
                                <div className="results-card-item-content-stars">
                                    <img className="results-card-item-content-star" src={YellowStar} alt="star" />
                                    <img className="results-card-item-content-star" src={YellowStar} alt="star" />
                                    <img className="results-card-item-content-star" src={YellowStar} alt="star" />
                                    <img className="results-card-item-content-star" src={YellowStar} alt="star" />
                                    <img className="results-card-item-content-star" src={RedStar} alt="star" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="results-card-group-row">
                        <div className="results-card-item">
                            <div className="results-card-item-title">
                                <h3>Pratos mais vendidos</h3>
                            </div>
                            <div className="results-card-item-content-C">
                                <div className="results-card-item-content-dish">
                                    <div className="results-card-item-content-dish-arrow">
                                        <img src={BeforeArrow} alt="Anterior" />
                                    </div>
                                    <div className="results-card-item-content-dish-picture">

                                    </div>
                                    <div className="results-card-item-content-dish-arrow">
                                        <img src={AfterArrow} alt="Próxima" />
                                    </div>
                                </div>
                                <div className="results-card-item-content-dish-position">
                                    <p><span className="results-card-item-content-dish-position-span">1º Lugar: </span>Prato 02</p>
                                </div>
                            </div>
                        </div>

                        <div className="results-card-item">
                            <div className="results-card-item-title">
                                <h3>Número de clientes fidelizados</h3>
                            </div>
                            <div className="results-card-item-content-D">
                                <span>179</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export default Results
