import React from 'react'
import './MenuUser.css'
import { Link } from 'react-router-dom'
import Wallet from '../../../assets/images/wallet.svg'
import Settings from '../../../assets/images/settings.svg'
import Logout from '../../../assets/images/logout.svg'
function MenuUser(props) {
    return (props.trigger) ? (
        <div>
          <nav id="menu-container">
                <div>
                    <h1 className="user-hello">Olá, Usuário</h1>
                    <div className="user-barra"></div>
                    <Link><img src={Wallet} alt="carteira" className="img-carteira" />
                    <p className="user-wallet"> Carteira</p></Link>
                    <Link><img src={Settings} alt="settings" className="img-settings"/>
                    <p className="user-edit">Editar dados</p></Link>
                    <Link to="/"><img src={Logout} alt="logout"  className="img-logout"/>
                    <p className="user-logout">Sair</p></Link>
                </div>
            </nav>   
        </div>
    ) : "";
}

export default MenuUser
