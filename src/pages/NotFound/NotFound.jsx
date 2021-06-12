import React from 'react'
import Footer from '../../components/Footer/Footer'
import Logo from '../../assets/images/comesebebeslogo.svg'
import { Link } from 'react-router-dom'
import './NotFound.css'
function NotFound() {
    return (
        <div id="container-body">
            <div className="header-notfound">
                <Link to="/"  id="logo"><img src={Logo} alt="logo" /></Link>
            </div>
            <div className="container-erro">
                <h1 id="erro-notfound-text">ERRO 404!</h1>
                <p id="notfound-text">Ops! Parece que o endereço que você digitou está incorreto...</p>
                <Link to="/"><button id="button-notfound">Voltar</button></Link>
            </div>
            
            <Footer/>
        </div>
    )
}

export default NotFound
