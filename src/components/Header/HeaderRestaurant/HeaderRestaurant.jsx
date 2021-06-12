import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import IconUser from '../../../assets/images/user-icon.svg'
import Logo from '../../../assets/images/comesebebeslogo.svg'
import MenuUser from '../MenuUser/MenuUser'
import './HeaderRestaurant.css'

function HeaderRestaurant() {
    const [buttonMenu, setMenu] = useState(false);
    const toggleButtonMenu = () =>{
        if(buttonMenu == false){
            setMenu(true)
        }
        else{
            setMenu(false)
        }
    }
    return (
        <header>
            <div id="header-user-logged">
                <Link to="/user-page" id="logo"><img src={Logo} alt="logo comes e bebes" /></Link>
                <div id="container-restaurant-links">
                    <Link><p id="gestao-restaurante-link">Gestão de Restaurante</p></Link>
                    <Link><p id="gestao-estoque-link">Gestão de Estoque</p></Link>
                    <Link><p id="resultados-link">Resultados</p></Link>
                    <Link><p id="pedidos-link">Pedidos</p></Link>
                </div>
                <img src={IconUser} alt="user img" className="user-restaurant" onClick={toggleButtonMenu} />
                <MenuUser trigger={buttonMenu}/>
            </div>
            
        </header>
    )
}

export default HeaderRestaurant
