import React from "react";
import { back, image1, image2 } from "../Object/assets";

const SecondComp = () => {
  return (
    <div
      className="flex flex-col lg:flex-row lg:justify-between items-center gap-4 lg:gap-8 mt-20 px-4"
      style={{ backgroundImage: `url(${back})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
    >
      <div className="text-black flex flex-col items-center lg:items-start text-center lg:text-left p-4 lg:p-8 bg-white bg-opacity-75 rounded-lg shadow-lg">
        <h1 className="uppercase text-xl lg:text-3xl font-medium text-textColor mb-4">
          Furniture for <br /> the new age
        </h1>
        <p className="text-sm lg:text-base mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Nesciunt suscipit quidem, obcaecati odio quas inventore?
        </p>
        <button className="border border-card2 rounded-lg px-4 py-2 text-textColor font-medium hover:bg-card2 hover:text-white transition">
          Explore
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        <img src={image1} alt="Furniture 1" className="w-56 lg:w-72 h-auto object-cover rounded-lg shadow-md" />
        <img src={image2} alt="Furniture 2" className="w-56 lg:w-72 h-auto object-cover rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default SecondComp;
