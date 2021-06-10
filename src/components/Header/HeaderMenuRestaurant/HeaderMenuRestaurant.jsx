import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/comesebebeslogo.svg'
import IconUser from '../../../assets/images/user-icon.svg'

function HeaderMenuRestaurant() {
    return (
        <div>
            <div>
            <Link to="/user-page" id="logo"><img src={Logo} alt="logo comes e bebes" /></Link>
            </div>

            <div>
                <ul>
                    <li>Gestaõ de restaurante</li>
                    <li>Gestão de Estoque</li>
                    <li>Resultados</li>
                    <li>Pedidos</li>
                </ul>
            </div>

            <div>
            <img src={IconUser} alt="user img" className="img-user" onClick={() => setMenu(true)} />
            </div>
        </div>
    )
}

export default HeaderMenuRestaurant
