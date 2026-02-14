import React, { createContext, useMemo, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prev) => {
            const existing = prev.find((entry) => entry.id === item.id);
            if (existing) {
                return prev.map((entry) =>
                    entry.id === item.id
                        ? { ...entry, quantity: entry.quantity + 1 }
                        : entry
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const clearCart = () => setCart([]);

    const cartCount = useMemo(
        () => cart.reduce((sum, item) => sum + item.quantity, 0),
        [cart]
    );
    const cartTotal = useMemo(
        () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        [cart]
    );

    const value = useMemo(
        () => ({ cart, addToCart, removeFromCart, clearCart, cartCount, cartTotal }),
        [cart, cartCount, cartTotal]
    );

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext };
