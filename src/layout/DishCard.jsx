import React from 'react';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "./Button.jsx";
import { useNavigate } from 'react-router-dom';

const DishCard = ({ img, title, description, price, onAddToCart, user }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (!user) {
            navigate("/login"); // redirect to login page
            return;
        }
        onAddToCart(); // add to cart if logged in
    };

    return (
        <div className="w-60 lg:w-1/4 p-5 shadow-[0_3px_8px_rgba(0,0,0,0.24)] rounded-lg">
            <img className="rounded-xl" src={img} alt={title}/>
            <div className="space-y-4">
                <h3 className="font-semibold text-center text-xl pt-6">{title}</h3>
                <p className="text-sm text-gray-500 text-center">{description}</p>
                <div className="flex flex-row justify-center">
                    <BsStarFill className="text-orange-500"/>
                    <BsStarFill className="text-orange-500"/>
                    <BsStarFill className="text-orange-500"/>
                    <BsStarFill className="text-orange-500"/>
                    <BsStarHalf className="text-orange-500"/>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <h3 className="font-semibold text-sm">৳{price}</h3>
                    <Button title="Buy Now!" onClick={handleClick} />
                </div>
            </div>
        </div>
    );
}

export default DishCard;