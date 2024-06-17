import React from "react";
import { RiSofaLine } from "react-icons/ri";
import { GiHanger } from "react-icons/gi";
import { GiFlexibleLamp } from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";


const ObjectActive = () => {
  return (
    <>
      <div className="flex gap-5 lg:gap-28 justify-center items-center  text-textColor mt-20">
        <div className="">
          <RiSofaLine size={40} className="ml-2" />
          <p className="">Furniture</p>
        </div>

        <div className="">
          <GiHanger size={40} className=""/>
          <p className="text-xs">Accessors</p>
        </div>

        <div className="">
          <GiFlexibleLamp size={40} className=""/>
          <p className="text-xs">Ligthing</p>
        </div>

        <div className="">
          <IoBedOutline size={40} className="" />
          <p className="text-xs ">Bedroom</p>
        </div>
        <div className="">
          <FaBath size={40} className="" />
          <p className="text-xs ">Bathroom</p>
        </div>
      </div>
    </>
  );
};

export default ObjectActive;
