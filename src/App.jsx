import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Dishes from "./components/Dishes.jsx";
import About from "./components/About.jsx";
import Review from "./components/Review.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";

const Landing = ({ user }) => (
    <>
        <div id="home"><Home /></div>
        <div id="dishes"><Dishes user={user} /></div> {/* pass user here */}
        <div id="about"><About /></div>
        <div id="review"><Review /></div>
    </>
);

const App = () => {
    const location = useLocation();

    // store logged-in user
    const [user, setUser] = useState(localStorage.getItem("user") || null);

    const handleLogin = (username) => setUser(username);
    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    // hide Navbar and Footer on Login and Cart pages
    const hideNav = location.pathname === "/login" || location.pathname === "/cart";

    return (
        <>
            {!hideNav && <Navbar user={user} onLogout={handleLogout} />}

            <main>
                <Routes>
                    <Route path="/" element={<Landing user={user} />} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/cart" element={<Cart user={user} />} />
                </Routes>
            </main>

            {!hideNav && <Footer />}
        </>
    );
};

export default App;
