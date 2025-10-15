import React, {useState} from 'react'
import {Link} from 'react-scroll'
import { IoRestaurantOutline } from "react-icons/io5";
import Button from '../layout/Button';
import {AiOutlineClose, AiOutlineMenuUnfold} from "react-icons/ai";
import {BiChevronDown} from "react-icons/bi";


const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const handleChange = () => { setMenu(!menu); };
    //const closeMenu = () => {setMenu(false);};

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
                    <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8 ">
                        <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>Home</Link>
                        <div className="relative group">
                            <div className="flex items-center gap-1">
                                <Link to="dishes" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>Dishes</Link>
                                <BiChevronDown className="cursor-pointer" size={25}/>
                            </div>
                            <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 shadow-md rounded-lg p-5">
                                <li>
                                    <Link to="dishes" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>Desi</Link>
                                </li>
                                <li>
                                    <Link to="dishes" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>Organic</Link>
                                    </li>
                                <li>
                                    <Link to="dishes" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>Processed</Link>
                                    </li>
                                <li>
                                    <Link to="dishes" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>FastFood</Link>
                                </li>
                            </ul>
                        </div>

                        <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>About</Link>
                        <Link to="review" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>Reviews</Link>

                        <Button title="Login"/>
                    </nav>
                    <div className="md:hidden flex items-center">
                        {menu ?
                                (<AiOutlineClose size={25} onClick={handleChange}/>):(
                                <AiOutlineMenuUnfold size={25} onClick={handleChange}/>
                            )
                        }
                    </div>
                </div>
                <div className={`${menu ? "translate-x-0": "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                    <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>Home</Link>
                    <Link to="dishes" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>Dishes</Link>
                    <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>About</Link>
                    <Link to="review" spy={true} smooth={true} duration={500} className='hover:text-orange-500 transition-all cursor-pointer'>Reviews</Link>

                <Button title="Login" />

                </div>
            </div>
        </div>
    )
}
export default Navbar
