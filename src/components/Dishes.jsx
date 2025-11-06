// Dishes.jsx
import React from 'react';
import DishCard from "../layout/DishCard.jsx";
import { useCart } from "./CartContext.jsx";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";
import img7 from "../assets/img/menu1.jpg";
import img8 from "../assets/img/menu2.jpg";
import img9 from "../assets/img/menu3.webp";

const Dishes = ({ user }) => {  // <-- accept user prop
    const { addToCart } = useCart();

    const menuItems = [
        { id: 1, img: img1, title: "Desi Cuisine", price: 500, category: "desi" },
        { id: 2, img: img2, title: "Desi Cuisine", price: 500, category: "desi" },
        { id: 3, img: img3, title: "Desi Cuisine", price: 500, category: "desi" },
        { id: 4, img: img4, title: "Vegetarian", price: 500, category: "vegetarian" },
        { id: 5, img: img5, title: "Vegetarian", price: 500, category: "vegetarian" },
        { id: 6, img: img6, title: "Vegetarian", price: 500, category: "vegetarian" },
        { id: 7, img: img7, title: "Fast Food", price: 500, category: "fastfood" },
        { id: 8, img: img8, title: "Fast Food", price: 500, category: "fastfood" },
        { id: 9, img: img9, title: "Fast Food", price: 500, category: "fastfood" },
    ];

    const renderCategory = (category, title) => (
        <div id={category} className="w-full mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>
            <div className="flex flex-wrap gap-8 justify-center">
                {menuItems
                    .filter(item => item.category === category)
                    .map(item => (
                        <DishCard
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            onAddToCart={() => addToCart(item)}
                            user={user}  // <-- pass user to DishCard
                        />
                    ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
            <h1 className="text-4xl font-semibold text-center pt-24 pb-10">Our Dishes</h1>

            {renderCategory("desi", "Desi Cuisine")}
            {renderCategory("vegetarian", "Vegetarian")}
            {renderCategory("fastfood", "Fast Food")}
        </div>
    );
}

export default Dishes;
