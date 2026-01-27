import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const activeClass = "text-[#8490ff]";
  const [open, setOpen] = React.useState(false);
  
  return (
    <header className="bg-white">
      <div className="container mx-auto flex items-center py-4 px-6 pl-32 justify-between">
        <div className="flex-shrink-0">
          <img src={logo} alt="" className="h-8" />
        </div>
        <nav className="hidden lg:flex md:flex">
          <ul className="flex space-x-6 text-black font-medium text-base leading-[1.625em] font-poppins">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? activeClass : "")}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? activeClass : "")}>About</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => (isActive ? activeClass : "")}>Services</NavLink></li>
            <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? activeClass : "")}>Portfolio</NavLink></li>
            <li><NavLink to="/pricing" className={({ isActive }) => (isActive ? activeClass : "")}>Pricing</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => (isActive ? activeClass : "")}>Blog</NavLink></li>
            <li><NavLink to="/pages" className={({ isActive }) => (isActive ? activeClass : "")}>Pages</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? activeClass : "")}>Contact</NavLink></li>
          </ul>
        </nav>

        <div>
          <CiMenuBurger onClick={() => setOpen(true)} size={24} className='cursor-pointer lg:hidden block md:hidden' />
        </div>
      </div>

      {/* mobile menu */}
      {open &&
        <div className='fixed top-0 left-0 w-full h-full bg-white lg:hidden'>
          <nav className="flex flex-col gap-7 p-6 relative">
            <IoMdClose
              onClick={() => setOpen(false)}
              size={28}
              className='cursor-pointer absolute top-5 right-20 text-gray-800'
            />
            <ul className="flex flex-col gap-6 text-black font-medium text-lg leading-8 font-poppins mt-10">
              <li><NavLink to="/" className={({ isActive }) => (isActive ? activeClass : "")}>Home</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => (isActive ? activeClass : "")}>About</NavLink></li>
              <li><NavLink to="/services" className={({ isActive }) => (isActive ? activeClass : "")}>Services</NavLink></li>
              <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? activeClass : "")}>Portfolio</NavLink></li>
              <li><NavLink to="/pricing" className={({ isActive }) => (isActive ? activeClass : "")}>Pricing</NavLink></li>
              <li><NavLink to="/blog" className={({ isActive }) => (isActive ? activeClass : "")}>Blog</NavLink></li>
              <li><NavLink to="/pages" className={({ isActive }) => (isActive ? activeClass : "")}>Pages</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => (isActive ? activeClass : "")}>Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      }
    </header>
  );
};

export default Header;
