import React from 'react'
import DishCard from "../layout/DishCard.jsx";
import img1 from "../assets/img/menu1.jpg"
import img2 from "../assets/img/menu1.jpg"
import img3 from "../assets/img/menu1.jpg"

const Menu = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
            <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">Premium Menu</h1>
            <div className="flex flex-wrap gap-8 justify-center">
                <DishCard img={img1} title="Delicious Dish" price="500"/>
                <DishCard img={img2} title="Delicious Dish" price="500"/>
                <DishCard img={img3} title="Delicious Dish" price="500"/>
            </div>
        </div>
    )
}
export default Menu
