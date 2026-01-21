import React from 'react';
import about from '../../../assets/images/about-img.png';

const Section = () => {
  return (
    <div className="bg-white h-[600px]">
      <section className="flex items-start gap-18 container w-6xl mx-auto py-16 px-6 h-full">
        <div className="">
          <img src={about} alt="About" className="w-[600px] object-contain" />
        </div>

        <div className="w-[500px] mt-10">
          <p className="text-black font-medium mb-8">ABOUT ME</p>
          <h1 className="text-4xl font-bold mb-10">PERSONAL DETAILS</h1>
          <p className="text-gray-600 mb-8">
            Here, I focus on a range of items and features that we use in life without giving them a second thought. 
            Such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <button className="px-6 py-2 text-sm bg-gradient-to-r from-indigo-500 to-sky-400 text-white hover:shadow-md hover:shadow-sky-200 hover:scale-105 transition transform duration-300">
            VIEW FULL DETAILS
          </button>
        </div>
      </section>
    </div>
  );
};

export default Section;
