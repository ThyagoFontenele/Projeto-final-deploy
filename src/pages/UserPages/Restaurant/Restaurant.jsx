import React from 'react'
import Header from '../../../components/Header/HeaderUserLogged/HeaderUserLogged'
import Footer from '../../../components/Footer/Footer'
import Loupe from '../../../assets/images/loupe1.png'
import './Restaurant.css'

function Restaurant() {
    return (
        <div>
            <Header/>

            <main className="main-restaurant">
                <div className="restaurant-header">
                    <div className="restaurant-info">
                        <div className="restaurant-info-description">
                            <h1 className="restaurant-info-description-h1">Restaurante 1</h1>
                            <h2 className="restaurant-info-description-h2">Comida Vegana</h2>
                        </div>
                        <div className="restaurant-info-owner">
                            <p className="restaurant-info-owner-p">Dono: Amanda Melo</p>
                            <p className="restaurant-info-owner-p">Aberto das 8h às 16h</p>
                        </div>
                    </div>

                    <div className="restaurant-logo">
                        LOGO
                    </div>
                </div>

                <div className="restaurant-search">
                    <div className="restaurant-search-box">
                        <img id="restaurant-search-box-img" src={Loupe} alt="Search..."/>
                        <input id="restaurant-search-box-input" type="text" placeholder="Pesquisar por nome"/>
                    </div>
                </div>

                <div className="restaurant-list">
                    RESTAURANT LIST
                </div>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Restaurant
