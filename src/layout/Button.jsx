import React from 'react'

const Button = (props) => {
    return (
        <div>
           <button className="px-6 py-1 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all rounded-full ">
               {props.title}
           </button>
        </div>
    )
}
export default Button
