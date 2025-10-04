import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";

const App = () => {
    return (
        <div>
            <Navbar />

            <main>
                <div id='home'>
                    <Home/>
                </div>
            </main>
        </div>
    )
}
export default App
