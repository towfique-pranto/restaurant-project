import React from 'react'
import {BsStarFill, BsStarHalf} from "react-icons/bs";
import Button from "./Button.jsx";


const DishCard = (props) => {
    return (

        <div className="w-60 lg:w-1/4 p-5 shadow-[0_3px_8px_rgba(0,0,0,0.24)] rounded-lg">
            <img className="rounded-xl" src={props.img} alt="img"/>
            <div className="space-y-4">
                <h3 className="font-semibold text-center text-xl pt-6">
                    {props.title}
                </h3>
                <div className="flex flex-row justify-center">
                    <BsStarFill className="text-orange-500"/>
                    <BsStarFill className="text-orange-500"/>
                    <BsStarFill className="text-orange-500"/>
                    <BsStarFill className="text-orange-500"/>
                    <BsStarHalf className="text-orange-500"/>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <h3 className="font-semibold text-sm">৳{props.price}</h3>
                    <Button title="Buy Now!"/>
                </div>
            </div>
        </div>
    )
}
export default DishCard
