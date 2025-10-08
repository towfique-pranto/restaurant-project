import React from 'react'
import ReviewCard from "../layout/ReviewCard.jsx";
import img1 from "../assets/img/pic1.png"

const Review = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px5">
            <h1 className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">Customer's Review</h1>
            <div className="flex flex-col md:flex-row gap-5 mt-5">
                <ReviewCard img={img1} name="Person 1" />
                <ReviewCard img={img1} name="Person 2" />
                <ReviewCard img={img1} name="Person 3" />
            </div>
        </div>

    )
}
export default Review
