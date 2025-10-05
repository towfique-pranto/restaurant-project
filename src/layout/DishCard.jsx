import React from 'react'
import {BsStarFill, BsStarHalf} from "react-icons/bs";
import Button from "./Button.jsx";

const DishCard = (props) => {
    return (
        <div className="w-1/4 lg:w-1/4 p-5 rounded-lg">
            <img src={props.img} alt="img" />
            <div>
                <h3>
                    {props.title}
                </h3>
                <div>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarHalf/>
                </div>
                <div>
                    <h3>{props.price}</h3>
                    <Button title="Buy Now!"/>
                </div>
            </div>
        </div>
    )
}
export default DishCard
