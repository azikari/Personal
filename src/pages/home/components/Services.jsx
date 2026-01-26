import React from 'react'
import { AiOutlinePieChart, AiOutlinePicture } from "react-icons/ai"
import { FaLaptop, FaTabletScreenButton } from "react-icons/fa6"
import { MdOutlineRocketLaunch, MdOutlineCameraAlt } from "react-icons/md"
import Title from '../../../components/title/Title'

const Services = () => {
  return (
    <section className="bg-white pb-20 max-w-6xl mx-auto mt-32 mb-18">
      <div className="container mx-auto px-6 text-center">
        <Title title={"My Offered Services"} subTitle={"At about this time of year, some months after New Year’s resolutions have been made and kept, or made and neglected."}/>

       

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          
          <div className="text-center">
            <AiOutlinePieChart className="text-black text-4xl mb-6 mx-auto" />
            <h3 className="text-lg font-semibold mb-4">Web Design</h3>
            <p className="text-gray-500">“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
          </div>

          <div className="text-center">
            <FaLaptop className="text-black text-4xl mb-6 mx-auto" />
            <h3 className="text-lg font-semibold mb-4">Web Development</h3>
            <p className="text-gray-500">If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.</p>
          </div>

          <div className="text-center">
            <MdOutlineCameraAlt className="text-black text-4xl mb-6 mx-auto" />
            <h3 className="text-lg font-semibold mb-4">Photography</h3>
            <p className="text-gray-500">Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.</p>
          </div>

          <div className="text-center">
            <AiOutlinePicture className="text-black text-4xl mb-6 mx-auto" />
            <h3 className="text-lg font-semibold mb-4">Clipping Path</h3>
            <p className="text-gray-500">Hypnosis quit smoking methods maintain caused quite a stir in the medical world over the last two decades. There is a lot of argument.</p>
          </div>

          <div className="text-center">
            <FaTabletScreenButton className="text-black text-4xl mb-6 mx-auto" />
            <h3 className="text-lg font-semibold mb-4">Apps Interface</h3>
            <p className="text-gray-500">Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts.</p>
          </div>

          <div className="text-center">
            <MdOutlineRocketLaunch className="text-black text-4xl mb-6 mx-auto" />
            <h3 className="text-lg font-semibold mb-4">Graphic Design</h3>
            <p className="text-gray-500">You’ve heard the expression, “Just believe it and it will come.” Well, technically, that is true, however, ‘believing’ is not just thinking that.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services
