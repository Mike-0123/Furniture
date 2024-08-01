import React from "react";
import { sellImage1, sellImage2 } from "../Object/assets";

const SellItems = () => {
  return (
    <div className="mt-20 px-4 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h1 className="uppercase text-2xl lg:text-3xl font-bold text-textColor">
          Browse Latest Arrivals
        </h1>
      </div>

      {/* Items Container */}
      <div className="flex flex-col lg:flex-row lg:gap-6 justify-center">
        {/* First Item */}
        <div className="flex flex-col bg-footer rounded-lg shadow-md w-32 max-w-xs lg:max-w-sm mb-6 lg:mb-0 overflow-hidden">
          <div className="relative w-10 h-40 lg:h-48">
            <img
              src={sellImage1}
              alt="Vace"
              className="w-32 h-32 object-cover"
              loading="lazy" // Lazy load image
            />
          </div>
          <div className="text-textColor flex justify-between items-center p-3 lg:p-4 text-xs lg:text-sm">
            <p>Vace</p>
            <p>$40</p>
          </div>
        </div>

        {/* Second Item */}
        <div className="flex flex-col bg-footer rounded-lg shadow-md w-full max-w-xs lg:max-w-sm overflow-hidden">
          <div className="relative w-full h-40 lg:h-48">
            <img
              src={sellImage2}
              alt="Sell Item 2"
              className="w-full h-full object-cover"
              loading="lazy" // Lazy load image
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellItems;
