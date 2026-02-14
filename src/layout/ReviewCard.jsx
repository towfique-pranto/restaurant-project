import React from 'react'

const ReviewCard = ({ img, name, review }) => {
    return (
        <div className="w-full md:w-1/3 bg-white border border-2 border-gray-200 md:border-none p-5 rounded-lg shadow-[0_3px_8px_rgba(0,0,0,0.24)]">
            <div>
                <p className="text-gray-500">{review}</p>
            </div>
            <div className="flex flex-row justify-center items-center mt-4 gap-4">
                <img className="rounded-full w-1/4" src={img} alt={name} />
                <h3 className="font-semibold">{name}</h3>

            </div>
        </div>
    )
}
export default ReviewCard