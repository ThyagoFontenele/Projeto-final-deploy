import React from 'react'
import Header from '../../components/Header/Header'
import Card1 from '../../components/Cards/Card1/Card1'
import './Home.css'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div>
            <Header/>
            <main>
                <div>
                    <h1>Comes "e" bebes</h1>
                    <p>O serviço que tem a cara da sua fome</p>
                </div>

                <div>
                    <Card1/>
                </div>
            </main>
        </div>
    )
}

export default Home
