import React from "react";


import { back, image1, image2 } from "../Object/assets";
const SecondComp = () => {
  return (
    <>
      <div
        className=" flex justify-center items-center  gap-2 mt-20 ml-2"
        style={{backgroundImage:`url(${back})`,backgroundPositionX:`1`}}
      >
        <div className="text-black flex-col relative text-xs ">
          <h1 className="uppercase pt-2 text-textColor text-sm font-medium lg:text-2xl ">
          Furniture for <br />the new age
          </h1>
          <p className="mt-3 lg:text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Nesciunt suscipit quidem, obcaecati odio quas inventore?</p>
          <div>
            <button className="relative border-solid border-[2px] mt-2 border-card2 rounded-lg text-center w-20 text-textColor">
              Explore
            </button>
          </div>
        </div>

        <div className="">
          <img src={image1} alt="" className="w-72" />
        </div>
        <div className="">
          <img src={image2} alt=""  className="w-72"/>
        </div>
      </div>
    </>
  );
};

export default SecondComp;
