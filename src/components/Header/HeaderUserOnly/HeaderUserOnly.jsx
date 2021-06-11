import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../../assets/images/comesebebeslogo.svg'
import User from '../../../assets/images/user-icon.svg'
import './HeaderUserOnly.css'

function HeaderDeliveryman() {
    return (
        <div>
            <div className="header-logo-user">
            <Link to="/user-page" id="logo"><img src={Logo} alt="Logo de Comes e Bebes" /></Link>
            <img src={User} alt="user icon" className="img-user" />
            </div>
        </div>
    )
}

export default HeaderDeliveryman