import React from 'react'
import heroImage from '../../../assets/images/hero-img.png'

const Hero = () => {
    return (

        <div className=" bg-gray-100 h-[700px]">
            <section className=" flex items-center gap-16 container w-6xl mx-auto px-6 h-full">

                <div className="w-[800px]">
                    <p className="text-black font-medium mb-2">THIS IS ME</p>
                    <h1 className="text-5xl font-bold mb-4">PHILIP GILBERT</h1>
                    <p className="text-gray-600 mb-6">You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.</p>
                    <button className="px-7 py-2 bg-gradient-to-r from-indigo-500 to-sky-400 text-white hover:shadow-md hover:shadow-sky-200 hover:scale-105 transition transform duration-300">DISCOVER NOW</button>
                </div>

                <div className="mt-auto">
                    <img src={heroImage} className='w-[800px] object-contain' alt="" />
                </div>



            </section>
        </div>



    )
}

export default Hero