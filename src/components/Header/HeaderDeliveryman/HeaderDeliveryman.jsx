import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../../assets/images/comesebebeslogo.svg'
import User from '../../../assets/images/user-icon.svg'
import './HeaderDeliveryman.css'

function HeaderDeliveryman() {
    return (
        <div className="header-logo-user">
            <header>
                <div>
                    <div>
                        <Link to="/"><img src={Logo} alt="Logo de Comes e Bebes" /></Link>
                    </div>
                </div>

                <div>
                    <ul>
                        <li><Link to=""><img src={User} alt="" /></Link></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default HeaderDeliveryman
