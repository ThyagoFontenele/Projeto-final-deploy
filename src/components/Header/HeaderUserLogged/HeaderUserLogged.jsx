import React from 'react'
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
                <Link to="/" id="logo"><img src={Logo} alt="logo comes e bebes" /></Link>
                <img src={IconUser} alt="user img" className="img-user"/>
                <img src={Carrinho} alt="carrinho img" className="img-carrinho" />
            </div>
        </div>
    )
}

export default HeaderUserLogged
