import React from 'react'

import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Banner = ({title,subtitle}) => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-sky-400 ">
          <div className='container mx-auto text-white py-20  flex flex-col gap-3    justify-center  items-center text-center '>
        <h1 className='text-[48px] font-bold'>{title}</h1>
        <div className=" flex justify-center items-center  gap-4">
          <Link to="/" className='text-base font-medium'>Home</Link>
          <FaArrowRight size={14} className='text-base font-medium'/>
          <Link to={`/${subtitle}`} className='text-base font-medium'>{subtitle}</Link>


        </div>
    </div>
    </div>
  
  )
}

export default Banner