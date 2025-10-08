import React from 'react'

const Footer = () => {
    return (
        <div>
            <div>
                    <div>
                        <h1>MenuJS</h1>
                        <p>Good food. Good mood. Every time. Bringing people together, one meal at a time.</p>
                    </div>
                <div>
                    <h1>Links</h1>
                    <nav>
                        <a className="hover:text-orange-500 transition-all cursor-pointer" href="/">Dishes</a>
                        <a className="hover:text-orange-500 transition-all cursor-pointer" href="/">About</a>
                        <a className="hover:text-orange-500 transition-all cursor-pointer" href="/">Menu</a>
                        <a className="hover:text-orange-500 transition-all cursor-pointer" href="/">Review</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Footer
