import React from 'react'
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
        </div>
    )
}

export default HeaderUserLogged
