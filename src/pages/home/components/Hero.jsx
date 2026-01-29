import React from 'react';
import heroImage from '../../../assets/images/hero-img.png';

const Hero = () => {
  return (
    <div className="bg-gray-100">
      <section className="hidden lg:flex items-center gap-16 container w-6xl mx-auto px-6 h-[700px]">
        <div className="w-[800px]">
          <p className="text-black font-medium mb-2">THIS IS ME</p>
          <h1 className="text-5xl font-bold mb-4">PHILIP GILBERT</h1>
          <p className="text-gray-600 mb-6">
            You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.
          </p>
          <button className="px-7 py-2 bg-gradient-to-r from-indigo-500 to-sky-400 text-white hover:shadow-md hover:shadow-sky-200 hover:scale-105 transition transform duration-300">
            DISCOVER NOW
          </button>
        </div>

        <div className="mt-auto">
          <img src={heroImage} className="w-[800px] object-contain" alt="Hero" />
        </div>
      </section>

      {/* Mobile/Tablet version */}
      <section className="flex flex-col items-center gap-6 lg:hidden px-6 py-16">
        <div className="w-full text-center">
          <p className="text-black font-medium mb-2">THIS IS ME</p>
          <h1 className="text-4xl font-bold mb-4">PHILIP GILBERT</h1>
          <p className="text-gray-600 mb-6">
            You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.
          </p>
          <button className="px-7 py-2 bg-gradient-to-r from-indigo-500 to-sky-400 text-white hover:shadow-md hover:shadow-sky-200 hover:scale-105 transition transform duration-300">
            DISCOVER NOW
          </button>
        </div>

        <div className="w-full flex justify-center">
          <img src={heroImage} className="w-full max-w-sm object-contain" alt="Hero" />
        </div>
      </section>

    </div>
  );
};

export default Hero;
