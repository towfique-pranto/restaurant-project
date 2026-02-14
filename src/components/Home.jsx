import React from 'react';
import Button from "../layout/Button.jsx";
import { scroller } from 'react-scroll';
import { heroContent } from "../data/siteData.js";

const Home = () => {
    const handleOrderNow = () => {
        scroller.scrollTo('dishes', {
            smooth: true,
            duration: 500,
        });
    };

    return (
        <div
            className="min-h-screen flex flex-row justify-center items-center text-center lg:px-32 px-5 bg-[url('./assets/img/photob.jpg')] bg-cover bg-no-repeat">
            <div className="w-full lg:w-2/3 space-y-5">
                <h1 className="text-gray-300 font-semibold text-center text-6xl">{heroContent.headline}</h1>
                <p className="text-gray-400 text-center">
                    {heroContent.subheadline}
                </p>
                <div className="text-center">
                    <Button title={heroContent.ctaLabel} onClick={handleOrderNow}/>
                </div>
            </div>
        </div>
    )
}
export default Home;