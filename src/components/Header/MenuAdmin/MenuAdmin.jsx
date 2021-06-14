import React from 'react'
import '../MenuUser/MenuUser.css'
import { Link } from 'react-router-dom'
import Settings from '../../../assets/images/settings.svg'
import Logout from '../../../assets/images/logout.svg'
import './MenuAdmin&Restaurant.css'
function MenuAdmin(props) {
    return (props.trigger) ? (
        <div>
          <nav id="menu-container">
                <div>
                    <h1 className="user-hello">Olá, Usuário</h1>
                    <div className="user-barra"></div>
                    <Link to="/admin/edit"><img src={Settings} alt="settings" className="img-settings-style"/>
                    <p className="style-edit">Editar dados</p></Link>
                    <Link to="/"><img src={Logout} alt="logout"  className="img-logout-style"/>
                    <p className="style-logout">Sair</p></Link>
                </div>
            </nav>   
        </div>
    ) : "";
}

export default MenuAdmin
