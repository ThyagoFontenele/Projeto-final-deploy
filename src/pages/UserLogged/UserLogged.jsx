import React from 'react'
import './UserLogged.css'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/HeaderUserLogged/HeaderUserLogged'

function UserLogged() {
    return (
        <div>
            <Header/>
            <div >
               <h1 className="user-h1">O que vamos pedir hoje?</h1>
               <div className="barra-style"></div>
            </div>
            <Footer/>
        </div>
    )
}

export default UserLogged
