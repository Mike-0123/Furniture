import React from "react";
import { sellImage1, sellImage2 } from "../Object/assets";

const SellItems = () => {
  return (
    <>
    <div className="mt-20">
      <div className="flex justify-center text-textColor ">
        <h1 className="uppercase text-2xl">Browse latest arrivals</h1>
      </div>
      <div className="flex gap-8 justify-center  relative ">
        <div className="flex-col bg-footer h-56  w-72 mt-20 ">
          <div className="">
            <img
              src={sellImage1}
              alt=""
              style={{
                height: `200px`,
                width: `100px`,
                position: `relative`,
                bottom: `100px`,
                left: `60px`,
              }}
            />
          </div>
          <div className="text-textColor flex gap-18">
            <p>Vace</p>
            <p>40$</p>
          </div>
        </div>
        

        <div className="bg-footer h-48  w-72 mt-20">
          <div>
            <img
              src={sellImage2}
              alt=""
              style={{
                height: `200px`,
                width: `300px`,
                position: `relative`,
                bottom: `100px`,
                left: `20px`,
              }}
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SellItems;
