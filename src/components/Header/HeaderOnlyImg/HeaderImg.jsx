import React from 'react'
import './HeaderImg.css'
import Logo from '../../../assets/images/comesebebeslogo.svg'
import { Link } from 'react-router-dom'
function HeaderImg() {
    return (
        <div>
            <div>
              <Link to="/" ><img src={Logo} alt="Logo de Comes e Bebes" id="logo-img"/></Link>
            </div>
        </div>
    )
}

export default HeaderImg
