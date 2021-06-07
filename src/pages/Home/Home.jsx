import React from 'react'
import Header from '../../components/Header/Header'
import Card1 from '../../components/Cards/Card1/Card1'
import Card2 from '../../components/Cards/Card2/Card2'
import './Home.css'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div>
            <Header/>
            <main className="main-home">
                <div>
                    <h1 className="h1-home">Comes e bebes</h1>
                    <p className="p1-home">O serviço que tem a cara da sua fome!</p>
                </div>

                <div className="display-cards-home">
                    <div><Card1/></div>
                    <div><Card2/></div>
                </div>

                <hr className="hr-home"/>


            </main>
        </div>
    )
}

export default Home
