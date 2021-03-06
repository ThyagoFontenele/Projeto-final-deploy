import React, { useState } from 'react'
import './HeaderUserLogged.css'

import '../../Reset/Reset.css'
import { Link } from 'react-router-dom'
import Carrinho from '../../../assets/images/carrinho.svg'
import IconUser from '../../../assets/images/user-icon.svg'
import Logo from '../../../assets/images/comesebebeslogo.svg'
import MenuUser from '../MenuUser/MenuUser'
import MenuBag from '../MenuUserBag/MenuBag'



function HeaderUserLogged() {
    const [buttonMenu, setMenu] = useState(false);
    const [buttonBag, setBag] = useState(false);
    const toggleButtonMenu = () =>{
        if(buttonMenu == false){
            setMenu(true)
            setBag(false)
        }
        else{
            setMenu(false)
        }
    }
    const toggleButtonBag = () =>{
        if(buttonBag == false){
            setBag(true)
            setMenu(false)
        }
        else{
            setBag(false)
        }
    }
    return (
        <header>
            <div id="header-user-logged">
                <Link to="/user-page" id="logo"><img src={Logo} alt="logo comes e bebes" /></Link>
                <img src={IconUser} alt="user img" className="img-user" onClick={toggleButtonMenu} />
                <img src={Carrinho} alt="carrinho img" className="img-carrinho"  onClick={toggleButtonBag}/>
                <MenuUser trigger={buttonMenu}/>
                <MenuBag trigger={buttonBag}/>
            </div>
        </header>
    )
}

export default HeaderUserLogged
