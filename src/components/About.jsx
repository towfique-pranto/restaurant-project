import React from 'react'
import img from '../assets/img/about.png'
import Button from "../layout/Button.jsx";

const About = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
            <img src={img} alt="img"/>
            <div className="space-y-4 lg:pt-14">
                <h1 className="font-semibold text-4xl text-center md:text-start">Why Choose Us?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis id nisi similique sit
                    temporibus ullam? Accusantium animi, asperiores eveniet explicabo magnam sapiente ut. Cumque debitis
                    ducimus est pariatur voluptate.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis error praesentium quisquam totam
                    voluptate. Distinctio earum ipsam repudiandae? Aliquid aspernatur beatae dignissimos error et id
                    inventore optio, recusandae sit vitae.
                </p>
                <div className="flex justify-center lg:justify-start">
                    <Button title="Learn More"/>
                </div>
            </div>
        </div>
    )
}
export default About
