import React from 'react'

const Footer = () => {
    return (
        <div className="bg-black text-white rounded-t-3xl mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
                    <div className="w-full md:w-1/4">
                        <h1 className="font-semibold text-xl pb-4">MenuJS</h1>
                        <p className="text-sm">Bringing people together, one meal at a time.</p>
                    </div>
                <div>
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
                    <nav className="flex flex-col gap-2">
                        <a className="hover:text-orange-500 transition-all cursor-pointer" href="/">Dishes</a>
                        <a className="hover:text-orange-500 transition-all cursor-pointer" href="/">About</a>
                        <a className="hover:text-orange-500 transition-all cursor-pointer" href="/">Menu</a>
                        <a className="hover:text-orange-500 transition-all cursor-pointer" href="/">Reviews</a>
                    </nav>
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
                    <nav className="flex flex-col gap-2">
                        <a className="hover:text-orange-500 transition-all cursor-pointer" href="/">towfique.pranto@gmail.com</a>
                        <a className="hover:text-orange-500 transition-all cursor-pointer" href="/">+8801677105201</a>
                        <a className="hover:text-orange-500 transition-all cursor-pointer" href="/">Social Media</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Footer
