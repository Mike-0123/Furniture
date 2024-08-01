import React from "react";
import { News1, News2 } from "../Object/assets";

const NewsCombined = () => {
  return (
    <>
      <div className="mt-12 px-4 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-card2 uppercase">
            Interior Décor Blog
          </h1>
        </div>

        {/* Introduction Text */}
        <div className="text-xs lg:text-base text-center mb-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            <br />
            feugiat magna justo, in euismod nibh venenatis a. Donec quis laoreet
            <br />
            mi. Suspendisse nec purus viverra lorem interdum condimentum ac ut
            <br />
          </p>
        </div>

        {/* First Section: Image and Text */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-12 mb-12">
          <div className="flex-1 lg:mr-8">
            <img 
              src={News1} 
              alt="News 1" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
              style={{ maxHeight: '350px', objectFit: 'cover' }} 
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-xl lg:text-2xl font-semibold mb-4">Ipsum Dolor.</h2>
            <p className="text-sm lg:text-base mb-6">
              Lorem ipsum dolor sit amet, <br />
              adipisicing elit.
            </p>
            <button className="border-2 border-card2 rounded-lg px-8 py-3 text-card2 font-medium hover:bg-card2 hover:text-white transition duration-300">
              Explore
            </button>
          </div>
        </div>

        {/* Second Section: Text and Image */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-12">
          <div className="flex-1 text-center lg:text-left lg:mr-8">
            <h2 className="text-xl lg:text-2xl font-semibold mb-4">Ipsum Dolor.</h2>
            <p className="text-sm lg:text-base mb-6">
              Lorem ipsum dolor sit amet, <br />
              adipisicing elit.
            </p>
            <button className="border-2 border-card2 rounded-lg px-8 py-3 text-card2 font-medium hover:bg-card2 hover:text-white transition duration-300">
              Explore
            </button>
          </div>
          <div className="flex-1">
            <img 
              src={News2} 
              alt="News 2" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
              style={{ maxHeight: '350px', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCombined;
