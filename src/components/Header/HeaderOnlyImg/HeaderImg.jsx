import React from 'react'
import './HeaderImg.css'
import Logo from '../../../assets/images/comesebebeslogo.svg'
import { Link } from 'react-router-dom'
function HeaderImg() {
    return (
        <div>
            <header>
                <nav>
                    <div>
                        <Link to="/" ><img className="logo-header" src={Logo} alt="Logo de Comes e Bebes" /></Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderImg
