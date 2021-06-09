import React from 'react'
<<<<<<< HEAD
import './HeaderUserLogged.css'
import { Link } from 'react-router-dom'
import '../../Reset/Reset.css'
import Carrinho from '../../../assets/images/carrinho.svg'
import IconUser from '../../../assets/images/user-icon.svg'
import Logo from '../../../assets/images/comesebebeslogo.svg'
function HeaderUserLogged() {
    return (
        <div>
            <div id="header-user-logged">
                <img src={Logo} alt="logo comes e bebes" id="logo"/>
                <img src={IconUser} alt="user img" className="img-user"/>
                <img src={Carrinho} alt="carrinho img" className="img-carrinho" />
            </div>
=======
import {Link} from 'react-router-dom'
import Logo from '../../../assets/images/comesebebeslogo.svg'
import Sacola from '../../../assets/images/sacola-de-compras.svg'
import User from '../../../assets/images/user1.svg'
import './HeaderUserLogged.css'

function HeaderUserLogged() {
    return (
        <div>
            <header className="header-user-logged">
                <nav>
                    <div>
                        <Link to="/" ><img className="logo-header" src={Logo} alt="Logo de Comes e Bebes" /></Link>
                    </div>

                    <div>
                        <ul>
                            <li><Link><img className="header-user-logged-img" src={User} alt="" /></Link></li>
                            <li><Link><img className="header-user-logged-img" src={Sacola} alt="" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
>>>>>>> 28a4584b25b8f10897302fc79b4848762ec097a4
        </div>
    )
}

export default HeaderUserLogged
