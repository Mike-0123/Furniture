import React from "react";
import { bigsofa, chair, lamp3, other } from "../Object/assets";

const ByoseComp = () => {
  return (
    <>
     
      <div className="flex-col  lg:ml-20 lg:gap-10 lg:mt-60 mt-20">
        <div className="text-card2 text-center uppercase lg:text-xl font-bold">
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing.
        </div>
        <div className="lg:flex gap-5 lg:mt-10">
          <div className="flex bg-card1 items-center">
            <div className="flex-col gap-4 text-xs lg:ml-5">
              <h1>Lorem, ipsum dolor.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipisicing elit.
              </p>
              <button className="border-solid border-2 border-card2 bordered-20">
                Explore
              </button>
            </div>
            <div className="img">
              <img src={bigsofa} alt="" style={{ width: `200px` }} />
            </div>
          </div>
          <div className="flex justify-center bg-footer items-center ">
            <div className="flex-col lg:gap-4 ">
              <h1 className="font-medium">ipsum dolor.</h1>
            </div>
            <div className="img">
              <img src={chair} alt="" style={{ width: `100px` }} />
            </div>
          </div>
          <div className="flex bg-Byose justify-center items-center bg-card3">
            <div className="flex-col gap-4  ">
              <h1 className="font-medium">ipsum dolor.</h1>
            </div>
            <div className="">
              <img src={other} alt="" style={{ width: `100px`,position:`relative`, bottom:`50px` }} />
            </div>
          </div>
          <div className="flex bg-card2 gap-12 justify-center items-center ">
            <div className="flex-col lg:gap-4 ">
              <h1 className="font-medium">ipsum dolor.</h1>
            </div>
            <div className="img">
              <img
                src={lamp3}
                alt=""
                style={{ width: `60px`, height: `100px`,position:`realtive` }}
              />
            </div>
 
          </div>
        </div>
      </div>
    </>
  );
};

export default ByoseComp;
