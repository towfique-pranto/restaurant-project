import React from 'react'
import Button from "../layout/Button.jsx";

const Home = () => {
    return (
        <div
            className="min-h-screen flex flex-row justify-center items-center text-center lg:px-32 px-5 bg-[url('./assets/img/photob.jpg')] bg-cover bg-no-repeat">
            <div className="w-full lg:w-2/3 space-y-5">
                <h1 className="text-gray-300 font-semibold text-center text-6xl">Crafted with Passion, Served with Love.</h1>
                <p className="text-gray-400 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid asperiores aut dolorem
                    fugiat magnam modi rem saepe soluta voluptatum!
                </p>
                <div className="text-center">
                    <Button title="Order Now!"/>
                </div>
            </div>
        </div>
    )
}
export default Home
