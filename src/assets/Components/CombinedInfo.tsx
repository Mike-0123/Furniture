import React from "react";
import { News1, News2 } from "../Object/assets";

const NewsCombined = () => {
  return (
    <>
      <div className="mt-20">
        <div className="uppercase font-bold  text-card2 text-center">
          <h1 className="text-2xl">Interior décor blog</h1>
        </div>
        <div className="text-xs lg:text-sm text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            <br />
            feugiat magna justo, in euismod nibh venenatis a. Donec quis laoreet
            <br />
            mi. Suspendisse nec purus viverra lorem interdum condimentum ac ut
            <br />
          </p>
        </div>

        <div className="flex justify-evenly mt-10">
          <div className="w-72 ">
            <img src={News1} alt="" />
          </div>

          <div className="flex-col pt-20">
            <h1 className="font-medium">ipsum dolor.</h1>
            <p className="flex-wrap text-sm">
              Lorem ipsum dolor sit amet, <br />
              adipisicing elit.
            </p>
            <button className="border-solid border-2 border-card2 rounded-lg w-60 mt-3">
              Explore
            </button>
          </div>
        </div>

        <div className="flex justify-evenly mt-10 gap-20 ">
          <div className="flex-col justify-center pt-20">
            <h1 className="font-medium">ipsum dolor.</h1>
            <p className="flex-wrap text-sm">
              Lorem ipsum dolor sit amet, <br />
              adipisicing elit.
            </p>
            <button className="border-solid border-2 border-card2 rounded-lg w-60 mt-3">
              Explore
            </button>
          </div>
          <div className="w-72 h-72 ">
            <img src={News2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCombined;
