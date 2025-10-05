import React from 'react'
import DishCard from "../layout/DishCard.jsx";
import img1 from "../assets/img/img1.jpg"

const Dishes = () => {
    return (
        <div>
            <h1>Our Dishes</h1>

            <div>
                <DishCard img={img1} title="Desi Crusine" price="BDT 500"/>
            </div>
        </div>
    )
}
export default Dishes
