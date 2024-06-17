import React from "react";
import {otherone , chair, lamp3, other, akandi2, chairo} from "../Object/assets";

const SecondByose = () => {
  return (
    <>
     
      <div className="flex-col  lg:ml-20 lg:gap-10 mt-5">
        {/* <div className="text-card2 text-center uppercase lg:text-xl font-bold">
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing.
        </div> */}
        <div className="lg:flex gap-5 lg:mt-10">
          <div className="flex bg-footer items-center">
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
            <div className="mt-10">
              <img src={otherone} alt="" style={{ width: `200px` }} />
            </div>
          </div>
          <div className="flex justify-center bg-card3 items-center ">
            <div className="flex-col lg:gap-4 ">
              <h1 className="font-medium">ipsum dolor.</h1>
            </div>
            <div className="img">
              <img src={chairo} alt="" style={{ width: `100px` }} />
            </div>
          </div>
          <div className="flex bg-Byose justify-center items-center bg-card1 w-96">
            <div className="flex-col gap-4  ">
              <h1 className="font-medium">ipsum dolor.</h1>
            </div>
            <div className="">
              <img src={akandi2} alt="" style={{ width: `200px`,position:`relative`, bottom:`10px` }} />
            </div>
          </div>
      
        </div>
      </div>
    </>
  );
};

export default SecondByose;
