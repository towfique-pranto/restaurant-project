import React from 'react';

const Button = ({ title, onClick }) => {
    return (
        <button
            onClick={onClick}  // ← forward the click
            className="px-6 py-1 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all rounded-full"
        >
            {title}
        </button>
    );
};

export default Button;
