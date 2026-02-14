import React from 'react';
import DishCard from "../layout/DishCard.jsx";
import { useCart } from "../hooks/useCart.js";
import { dishSections, menuItems } from "../data/siteData.js";

const Dishes = ({ user }) => {
    const { addToCart } = useCart();

    const renderCategory = (categoryKey, title) => (
        <div id={categoryKey} className="w-full mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>
            <div className="flex flex-wrap gap-8 justify-center">
                {menuItems
                    .filter(item => item.category === categoryKey)
                    .map(item => (
                        <DishCard
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            onAddToCart={() => addToCart(item)}
                            user={user}
                        />
                    ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
            <h1 className="text-4xl font-semibold text-center pt-24 pb-10">Our Dishes</h1>
            {dishSections.map((section) => renderCategory(section.key, section.title))}
        </div>
    );
}

export default Dishes;