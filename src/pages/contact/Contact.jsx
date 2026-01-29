import React from 'react'
import { HiOutlineHome } from "react-icons/hi2";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
// import Banner from '../../components/banner/Banner';

const Contact = () => {
  return (
    <div>
      {/* <Banner title="Contact Us" subtitle="Contact Us" /> */}

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="w-full h-[400px] overflow-hidden">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.6533303596666!2d49.835159176505336!3d40.372210558346964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307daf022c6f8d%3A0x4e6535d9afac4056!2sNizami%20St%2C%20Baku!5e0!3m2!1sru!2saz!4v1769294491834!5m2!1sru!2saz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-16">
            <div>
              <div className="flex mb-6">
                <HiOutlineHome size={32} className="text-[#8490ff] mr-6" />
                <div>
                  <p className="text-gray-700 font-medium">Binghamton, New York</p>
                  <p className="text-gray-400">4343 Hinkle Deegan Lake Road</p>
                </div>
              </div>

              <div className="flex mb-6">
                <BsTelephone size={28} className="text-[#8490ff] mr-6" />
                <div>
                  <p className="text-gray-700 font-medium">00 (958) 9865 562</p>
                  <p className="text-gray-400">Mon to Fri 9am to 6 pm</p>
                </div>
              </div>

              <div className="flex">
                <GoMail size={26} className="text-[#8490ff] mr-6" />
                <div>
                  <p className="text-gray-700 font-medium">support@karima.com</p>
                  <p className="text-gray-400">Send us your query anytime!</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 px-4 py-3 outline-none placeholder:text-[16px] bg-white"
                />
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full border border-gray-300 px-4 py-3 outline-none placeholder:text-[16px] bg-white"
                />
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 px-4 py-3 outline-none placeholder:text-[16px] bg-white"
                />
              </div>

              <div className="flex flex-col">
                <textarea
                  placeholder="Enter Message"
                  className="w-full h-[200px] border border-gray-300 px-4 py-3 resize-none outline-none bg-white"
                />
                <button
                  className="mt-6 self-end bg-[#8490ff] text-white px-8 py-3 text-sm font-semibold"
                >
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact