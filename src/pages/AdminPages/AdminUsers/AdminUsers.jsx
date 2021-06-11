import React from 'react'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/HeaderAdmin/HeaderAdmin'

function AdminUsers() {
    return (
        <div>
            <Header/>
            <div>
                <h1 className="user-h1">Lista de usuários</h1>
            </div>
        
            <Footer/>
        </div>
    )
}

export default AdminUsers
