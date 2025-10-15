import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Dishes from "./components/Dishes.jsx";
import About from "./components/About.jsx";
import Review from "./components/Review.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <div>
            <Navbar />

            <main>
                <div id='home'>
                    <Home/>
                </div>
                <div id='dishes'>
                    <Dishes />
                </div>
                <div id='about'>
                    <About/>
                </div>
                <div id="review">
                    <Review/>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default App
