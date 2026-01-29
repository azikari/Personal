import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { FaArrowRight, FaFacebookF, FaTwitter, FaDribbble, FaBehance } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#04091e] text-gray-400 py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                      flex flex-col lg:flex-row gap-10 justify-center lg:justify-start">

        <div className="flex flex-col gap-4 w-full lg:w-[460px]">
          <h3 className="text-white text-lg font-semibold">About Me</h3>
          <p>
            We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience.
          </p>
          <p>
            Copyright <span>&copy; 2026</span> All rights reserved | This template is made with{' '}
            <IoMdHeartEmpty className="inline text-gray-400 mx-1" />
            by{' '}
            <a
              href="https://colorlib.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8490ff]"
            >
              Colorlib
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-[400px]">
          <h3 className="text-white text-lg font-semibold">Newsletter</h3>
          <p>Stay updated with our latest trends</p>

          <div className="flex w-full">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-1 px-4 py-2 bg-white text-gray-800 outline-none"
            />
            <button className="bg-[#8490ff] px-4 flex items-center justify-center">
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-[300px]">
          <h3 className="text-white text-lg font-semibold">Follow Me</h3>
          <p>Let us be social</p>

          <div className="flex gap-4 text-white">
            <button onClick={scrollToTop} className="hover:text-[#8490ff]"><FaFacebookF /></button>
            <button onClick={scrollToTop} className="hover:text-[#8490ff]"><FaTwitter /></button>
            <button onClick={scrollToTop} className="hover:text-[#8490ff]"><FaDribbble /></button>
            <button onClick={scrollToTop} className="hover:text-[#8490ff]"><FaBehance /></button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer