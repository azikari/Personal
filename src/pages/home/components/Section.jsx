import React from 'react';
import about from '../../../assets/images/about-img.png';

const Section = () => {
  return (
    <div className="bg-white">
      <section className="hidden lg:flex items-start gap-18 container w-6xl mx-auto py-16 px-6 h-[500px]">
        <div>
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

      {/* Mobile/Tablet version */}
      <section className="flex flex-col items-center gap-8 lg:hidden px-6 py-16">
        <div className="w-full flex justify-center">
          <img src={about} alt="About" className="w-full max-w-md object-contain" />
        </div>

        <div className="w-full text-center">
          <p className="text-black font-medium mb-4">ABOUT ME</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">PERSONAL DETAILS</h1>
          <p className="text-gray-600 mb-6">
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
