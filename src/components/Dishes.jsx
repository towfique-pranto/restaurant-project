import React from 'react'
import DishCard from "../layout/DishCard.jsx";
import img1 from "../assets/img/img1.png"
import img2 from "../assets/img/img2.png"
import img3 from "../assets/img/img3.png"
import img4 from "../assets/img/img4.png"
import img5 from "../assets/img/img5.png"
import img6 from "../assets/img/img6.png"

const Dishes = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
            <h1 className="text-4xl font-semibold text-center pt-24 pb-10">Our Dishes</h1>

            <div className="flex flex-wrap gap-8 justify-center">
                <DishCard img={img1} title="Desi Crusine" price="500"/>
                <DishCard img={img2} title="Desi Crusine" price="500"/>
                <DishCard img={img3} title="Desi Crusine" price="500"/>
                <DishCard img={img4} title="Desi Crusine" price="500"/>
                <DishCard img={img5} title="Desi Crusine" price="500"/>
                <DishCard img={img6} title="Desi Crusine" price="500"/>
            </div>
        </div>   )
}
export default Dishes
