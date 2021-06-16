import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../../assets/images/comesebebeslogo.svg'
import User from '../../../assets/images/user-icon.svg'
import './HeaderDeliveryman.css'
import MenuDeliveryman from '../MenuDeliveryman/MenuDeliveryman'

function HeaderDeliveryman() {
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
            <div className="header-logo-user">
                <Link to="/deliveryman/page" id="logo"><img src={Logo} alt="Logo de Comes e Bebes" /></Link>
                <img src={User} alt="user icon" className="img-user" onClick={toggleButtonMenu} />
                <MenuDeliveryman trigger={buttonMenu}/>
            </div>
        </header>
    )
}

export default HeaderDeliveryman
