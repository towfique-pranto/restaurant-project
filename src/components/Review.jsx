import React from 'react'
import ReviewCard from "../layout/ReviewCard.jsx";
import { reviewContent } from "../data/siteData.js";

const Review = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px5">
            <h1 className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">{reviewContent.title}</h1>
            <div className="flex flex-col md:flex-row gap-5 mt-5">
                {reviewContent.items.map((item) => (
                    <ReviewCard key={item.id} img={item.img} name={item.name} review={item.review} />
                ))}
            </div>
        </div>

    )
}
export default Review