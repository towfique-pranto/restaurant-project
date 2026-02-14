import React, { useState } from 'react'
import Button from "../layout/Button.jsx";
import { aboutContent } from "../data/siteData.js";

const About = () => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
            <img src={aboutContent.image} alt="About MenuJS"/>
            <div className="space-y-4 lg:pt-14">
                <h1 className="font-semibold text-4xl text-center md:text-start">{aboutContent.title}</h1>
                {aboutContent.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="flex justify-center lg:justify-start">
                    <Button title={showInfo ? "Hide Info" : "Learn More"} onClick={() => setShowInfo(!showInfo)} />
                </div>

                {showInfo && (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 space-y-2">
                        <h2 className="font-semibold text-lg">{aboutContent.creator.panelTitle}</h2>
                        <p><span className="font-medium">Name:</span> {aboutContent.creator.name}</p>
                        <p>
                            <span className="font-medium">Email:</span>{' '}
                            <a className="text-orange-600 hover:underline" href={`mailto:${aboutContent.creator.email}`}>{aboutContent.creator.email}</a>
                        </p>
                        <p>
                            <span className="font-medium">Phone:</span>{' '}
                            <a className="text-orange-600 hover:underline" href={`tel:${aboutContent.creator.phone}`}>{aboutContent.creator.phone}</a>
                        </p>
                        <p>
                            <span className="font-medium">GitHub:</span>{' '}
                            <a className="text-orange-600 hover:underline" href={aboutContent.creator.github} target="_blank" rel="noreferrer">
                                {aboutContent.creator.github.replace('https://', '')}
                            </a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default About