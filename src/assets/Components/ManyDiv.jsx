import React from "react";
import { FaPlus } from "react-icons/fa6";
import { div1, div3, div4, slide2 } from "../Object/assets";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const ManyDiv = () => {
    return (  


        <>
        <div className="flex justify-center mt-20 text-textColor">
            <div className="ml-5">
<h1 className="font-bold lg:text-2xl mb-2">BEST <br /> ITEMS</h1>
<ul className="text-xs lg:text-sm flex flex-col gap-2 mr-2">
    <li className="flex items-center"><FaPlus />Furniture</li>
    <li className="flex items-center"><FaPlus />Natural Wood</li>
    <li className="flex items-center"><FaPlus />WoodPick</li>
    <li className="flex items-center"><FaPlus />Essential</li>
    <div className="flex gap-5 mt-2">
    <FaArrowLeft />
    <FaArrowRight />
    </div>

</ul>
            </div>
  <div className="flex flex-col lg:flex-row gap-5 ml-10">
    <img src={div1} alt="" style={{width:'200px',height:`200px`}}/>
    <img  src={slide2} alt="" style={{width:'200px',height:`200px`}} />
    <img src={div3} alt=""  style={{width:'200px',height:`200px`}}/>
    <img src={div4} alt="" style={{width:'200px',height:`200px`}} />


  </div>



        </div>
        

        </>
    );
}
 
export default ManyDiv;