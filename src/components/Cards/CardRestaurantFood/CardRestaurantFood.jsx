import React from 'react'
import AddBtn from '../../../assets/images/add-btn.svg'
import './CardRestaurantFood.css'

function CardRestaurantFood() {
    return (
        <div className="card-restaurant-food">
            <div className="card-restaurant-food-picture">

            </div>
            <div className="card-restaurant-food-info">
                <div className="card-restaurant-food-info-dish">
                    Coxinha de Jaca
                </div>
                <div className="card-restaurant-food-info-price">
                    R$ 8,00
                </div>
                <div className="card-restaurant-food-add">
                    <img className="card-restaurant-food-addbtn" src={AddBtn} alt="Add Button" />
                </div>
            </div>
        </div>
    )
}

export default CardRestaurantFood
