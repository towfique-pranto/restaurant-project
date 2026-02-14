import React, { useState } from "react";
import { useCart } from "../hooks/useCart.js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, addToCart, removeFromCart, clearCart, cartTotal } = useCart();
    const navigate = useNavigate();
    const [status, setStatus] = useState("");

    const handleCheckout = () => {
        if (cart.length === 0) {
            setStatus("Your cart is empty.");
            return;
        }
        clearCart();
        navigate("/"); // go back to landing page after checkout
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
            <div className="bg-white shadow-md rounded p-6 w-96">
                <h2 className="text-2xl font-semibold mb-4 text-center">Your Cart</h2>

                {cart.length === 0 ? (
                    <p className="text-center">Your cart is empty.</p>
                ) : (
                    <>
                        {cart.map(item => (
                            <div key={item.id} className="flex justify-between border-b py-2">
                                <div className="flex flex-col">
                                    <span>{item.title}</span>
                                    <span>৳{item.price} each</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="bg-green-500 text-white px-2 py-1 rounded"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))}
                        <h3 className="text-xl mt-4 text-right">Total: ৳{cartTotal}</h3>
                        <button
                            onClick={handleCheckout}
                            className="mt-4 bg-green-500 text-white w-full p-2 rounded hover:bg-green-600 transition"
                        >
                            Checkout
                        </button>
                    </>
                )}

                <button
                    onClick={() => navigate("/")} // back to landing page
                    className="mt-6 bg-blue-500 text-white w-full p-2 rounded"
                >
                    Back
                </button>
                {status && <p className="text-center mt-4 text-sm text-gray-600">{status}</p>}
            </div>
        </div>
    );
};

export default Cart;
