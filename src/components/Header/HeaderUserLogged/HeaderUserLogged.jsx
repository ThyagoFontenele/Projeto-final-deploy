import React, { useState } from 'react'
import './HeaderUserLogged.css'
import { Link } from 'react-router-dom'
import '../../Reset/Reset.css'
import Carrinho from '../../../assets/images/carrinho.svg'
import IconUser from '../../../assets/images/user-icon.svg'
import IconUserRed from '../../../assets/images/user-icon-red.svg'
import Logo from '../../../assets/images/comesebebeslogo.svg'
import MenuUser from '../MenuUser/MenuUser'
import MenuBag from '../MenuBag/MenuBag'


function HeaderUserLogged() {
    const [buttonMenu, setMenu] = useState(false);
    const [buttonBag, setBag] = useState(false);
    return (
        <div>
            <div id="header-user-logged">
                <Link to="/user-page" id="logo"><img src={Logo} alt="logo comes e bebes" /></Link>
                <img src={IconUser} alt="user img" className="img-user" onClick={() => setMenu(true)} />
                <img src={Carrinho} alt="carrinho img" className="img-carrinho"  onClick={() => setBag(true)}/>
                <MenuUser trigger={buttonMenu}/>
                <MenuBag trigger={buttonBag}/>
            </div>
        </div>
    )
}

export default HeaderUserLogged
