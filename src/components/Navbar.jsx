import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { IoRestaurantOutline } from "react-icons/io5";
import Button from '../layout/Button';
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { useCart } from "../hooks/useCart.js";

const Navbar = ({ user, onLogout }) => {
    const [menu, setMenu] = useState(false);
    const { cartCount } = useCart();
    const handleChange = () => setMenu(!menu);

    return (
        <div className="fixed w-full">
            <div>
                <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
                    <div className="flex flex-row cursor-pointer">
            <span>
              <IoRestaurantOutline size={32}/>
            </span>
                        <h1 className="text-xl font-semibold">MenuJS</h1>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
                        <ScrollLink to="home" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>Home</ScrollLink>

                        <div className="relative group">
                            <div className="flex items-center gap-1">
                                <ScrollLink to="dishes" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>Dishes</ScrollLink>
                                <BiChevronDown className="cursor-pointer" size={25}/>
                            </div>
                            <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 shadow-md rounded-lg p-5">
                                <li>
                                    <ScrollLink to="desi" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>Desi</ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="vegetarian" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>Vegetarian</ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="fastfood" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>Fastfood</ScrollLink>
                                </li>
                            </ul>
                        </div>

                        <ScrollLink to="about" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>About</ScrollLink>
                        <ScrollLink to="review" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>Reviews</ScrollLink>

                        {/* Conditional Buttons */}
                        {user ? (
                            <>
                                <RouterLink to="/cart">
                                    <div className="relative inline-block">
                                        <Button title="Cart"/>
                                        {cartCount > 0 && (
                                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                                                {cartCount}
                                            </span>
                                        )}
                                    </div>
                                </RouterLink>
                                <button onClick={onLogout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
                            </>
                        ) : (
                            <RouterLink to="/login">
                                <Button title="Login"/>
                            </RouterLink>
                        )}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center">
                        {menu ? (
                            <AiOutlineClose size={25} onClick={handleChange}/>
                        ) : (
                            <AiOutlineMenuUnfold size={25} onClick={handleChange}/>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                    <ScrollLink to="home" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>Home</ScrollLink>
                    <ScrollLink to="dishes" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>Dishes</ScrollLink>
                    <ScrollLink to="about" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>About</ScrollLink>
                    <ScrollLink to="review" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>Reviews</ScrollLink>

                    {/* Conditional Buttons */}
                    {user ? (
                        <>
                            <RouterLink to="/cart">
                                <div className="relative inline-block">
                                    <Button title="Cart"/>
                                    {cartCount > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                                            {cartCount}
                                        </span>
                                    )}
                                </div>
                            </RouterLink>
                            <button onClick={onLogout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
                        </>
                    ) : (
                        <RouterLink to="/login">
                            <Button title="Login"/>
                        </RouterLink>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
