import React from "react";
import { otherone, chair, lamp3, other, akandi2, chairo } from "../Object/assets";

const SecondByose = () => {
  return (
    <div className="mt-10 px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:gap-10 lg:justify-between">
        {/* First Section */}
        <div className="flex flex-col lg:flex-row lg:items-center bg-footer p-4 rounded-lg shadow-md mb-8 lg:mb-0">
          <div className="flex-1 text-center lg:text-left lg:mr-8">
            <h2 className="text-lg lg:text-xl font-bold mb-2">Lorem, ipsum dolor.</h2>
            <p className="text-sm lg:text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipisicing elit.
            </p>
            <button className="border-2 border-card2 rounded-lg px-6 py-2 text-card2 font-medium hover:bg-card2 hover:text-white transition duration-300">
              Explore
            </button>
          </div>
          <div className="flex-1 mt-4 lg:mt-0">
            <img 
              src={otherone} 
              alt="Other one" 
              className="w-full h-auto object-cover rounded-lg" 
              style={{ maxHeight: '250px' }} 
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col lg:flex-row lg:items-center bg-card3 p-4 rounded-lg shadow-md mb-8 lg:mb-0">
          <div className="flex-1 text-center lg:text-left lg:mr-8">
            <h2 className="text-lg lg:text-xl font-medium mb-2">Ipsum dolor.</h2>
          </div>
          <div className="flex-1 mt-4 lg:mt-0">
            <img 
              src={chairo} 
              alt="Chair" 
              className="w-full h-auto object-cover rounded-lg" 
              style={{ maxHeight: '150px' }} 
            />
          </div>
        </div>

        {/* Third Section */}
        <div className="flex flex-col lg:flex-row lg:items-center bg-card1 p-4 rounded-lg shadow-md">
          <div className="flex-1 text-center lg:text-left lg:mr-8">
            <h2 className="text-lg lg:text-xl font-medium mb-2">Ipsum dolor.</h2>
          </div>
          <div className="flex-1 mt-4 lg:mt-0">
            <img 
              src={akandi2} 
              alt="Akandi" 
              className="w-full h-auto object-cover rounded-lg" 
              style={{ maxHeight: '250px' }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondByose;
