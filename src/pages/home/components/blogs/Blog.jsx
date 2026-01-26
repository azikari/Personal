import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";

const Blog = ({ image, authorImage, authorName, date, likes, comments, title, subtitle }) => {
    return (
        <div className="w-[360px] flex flex-col bg-gray-100">
            <div className=" group w-full h-60 overflow-hidden">
                <img src={image} alt={title} className="transition-transform duration-500 group-hover:scale-110" />

            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src={authorImage}
                        alt=""
                        className="w-10 h-10 object-cover"
                    />
                    <span className="ml-3 text-sm font-medium text-gray-700">
                        {authorName}
                    </span>
                </div>

                <div className="flex items-center text-gray-500 text-sm">
                    <span className="mr-3">{date}</span>

                    <div className="flex items-center mr-3">
                        <IoMdHeartEmpty className="text-lg" />
                        <span className="ml-1">{likes}</span>
                    </div>

                    <div className="flex items-center">
                        <FaRegComment />
                        <span className="ml-1">{comments}</span>
                    </div>
                </div>

            </div>

            <hr className="border-t border-gray-200 mt-1 mb-8" />

            <div className="pb-4 text-left">
                <h3 className="font-semibold text-[18px] mb-2 transition-colors duration-300 hover:text-[#8490ff] cursor-pointer">{title}</h3>
                <p className="text-gray-500 text-[16px]">{subtitle}</p>
            </div>

        </div >
    );
};

export default Blog;
