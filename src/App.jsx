import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Dishes from "./components/Dishes.jsx";

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
            </main>
        </div>
    )
}
export default App
