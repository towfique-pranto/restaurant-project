import React, { useState } from "react";
import { useCart } from "../hooks/useCart.js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, addToCart, removeFromCart, clearCart, cartTotal } = useCart();
    const navigate = useNavigate();
    const [status, setStatus] = useState("");
    const [lastOrder, setLastOrder] = useState(null);

    const buildReceiptText = (order) => {
        const lines = [
            "MenuJS Receipt",
            `Order ID: ${order.id}`,
            `Placed: ${order.placedAt}`,
            "",
            "Items:",
            ...order.items.map((item) => `${item.title} x ${item.quantity} = ৳${item.price * item.quantity}`),
            "",
            `Total Paid: ৳${order.total}`,
        ];

        return lines.join("\n");
    };

    const handleDownloadReceipt = () => {
        if (!lastOrder) return;

        const receiptText = buildReceiptText(lastOrder);
        const blob = new Blob([receiptText], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `receipt-${lastOrder.id}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const handlePrintReceipt = () => {
        if (!lastOrder) return;

        const printWindow = window.open("", "_blank", "width=700,height=700");
        if (!printWindow) return;

        const receiptText = buildReceiptText(lastOrder);
        printWindow.document.write(`<pre style="font-family: Arial, sans-serif; white-space: pre-wrap;">${receiptText}</pre>`);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    };

    const handleCheckout = () => {
        if (cart.length === 0) {
            setStatus("Your cart is empty.");
            return;
        }

        const orderSnapshot = {
            id: `ORD-${Date.now()}`,
            placedAt: new Date().toLocaleString(),
            items: cart.map((item) => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity,
            })),
            total: cartTotal,
        };

        setLastOrder(orderSnapshot);
        setStatus("Checkout successful. Your order summary is shown above.");
        clearCart();
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

                {lastOrder && (
                    <div className="mt-6 border border-green-200 bg-green-50 rounded p-4 space-y-2">
                        <h3 className="text-lg font-semibold text-green-700">Order Confirmed</h3>
                        <p className="text-sm text-gray-700">Order ID: {lastOrder.id}</p>
                        <p className="text-sm text-gray-700">Placed: {lastOrder.placedAt}</p>
                        <div className="pt-1">
                            {lastOrder.items.map((item) => (
                                <p key={item.id} className="text-sm text-gray-800">
                                    {item.title} x {item.quantity} = ৳{item.price * item.quantity}
                                </p>
                            ))}
                        </div>
                        <p className="font-semibold text-right">Paid: ৳{lastOrder.total}</p>
                        <div className="flex gap-2 pt-2">
                            <button
                                onClick={handlePrintReceipt}
                                className="flex-1 bg-gray-700 text-white p-2 rounded hover:bg-gray-800 transition"
                            >
                                Print Receipt
                            </button>
                            <button
                                onClick={handleDownloadReceipt}
                                className="flex-1 bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition"
                            >
                                Download Receipt
                            </button>
                        </div>
                    </div>
                )}

                <button
                    onClick={() => navigate("/")}
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