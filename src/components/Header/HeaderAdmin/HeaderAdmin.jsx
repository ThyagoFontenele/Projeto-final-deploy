import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import IconUser from '../../../assets/images/user-icon.svg'
import Logo from '../../../assets/images/comesebebeslogo.svg'
import MenuAdmin from '../MenuAdmin/MenuAdmin'
import './HeaderAdmin.css'

function HeaderAdmin() {
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
            <div id="header-admin">
                <Link to="/user-page" id="logo"><img src={Logo} alt="logo comes e bebes" /></Link>
                <div>
                    <Link to="/admin/users"><p id="lista-usuarios-link">Lista de Usuários</p></Link>
                    <Link to="/admin/deliveryman"><p id="admissao-link">Admissão de Entregadores</p></Link>
                    <Link to="/admin/restaurant/register"><p id="cadastrar-dono-link">Cadastrar dono de restaurante</p></Link>
                </div>
                <img src={IconUser} alt="user img" className="user-admin" onClick={toggleButtonMenu} />
                <MenuAdmin trigger={buttonMenu}/>
            </div>
            
        </header>
    )
}

export default HeaderAdmin
