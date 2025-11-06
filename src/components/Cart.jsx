import React from "react";
import { useCart } from "./CartContext.jsx";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const handleCheckout = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        alert("Thank you! Your order has been placed.");
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
                                <span>{item.title}</span>
                                <span>৳{item.price}</span>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <h3 className="text-xl mt-4 text-right">Total: ৳{total}</h3>
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
            </div>
        </div>
    );
};

export default Cart;
