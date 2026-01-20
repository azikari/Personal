import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <header className="bg-white">
            <div className="container mx-auto flex items-center py-4 px-6 pl-32 justify-between">
                <div className="flex-shrink-0">
                    <img src={logo} alt="" className="h-8" />
                </div>

                <nav className="">
                    <ul className="flex space-x-6 text-black font-medium text-base leading-[1.625em] font-poppins">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/pages">Pages</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}

export default Header