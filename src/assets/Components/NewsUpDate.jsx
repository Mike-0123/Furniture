import React from "react";
import { newupdate1, newupdate2 } from "../Object/assets";
const NewsUpDate = () => {
    return ( 

        <>

        <div className="mt-20">
            <div className="flex  justify-center">
                <h1 className="text-textColor lg:text-2xl font-bold">
                NEWS & <br /> UPDATES
                </h1>
            </div>
            <div className="flex flex-col m-3 lg:flex-row justify-center gap-5 lg:mb-5 lg:mt-5 ">
                <div className="flex flex-col">  
                    <img src={newupdate1} style ={{width:`400px`, height:`350px`}} alt="" />
                    <div className="flex lg:gap-28 mt-2">
                        <h1 className="text-textColor">Lorem ipsum dolor sit amet.</h1>
                        <a href="#">Read</a>
                    </div>
                </div>
              <div className="flex flex-col m-3">
                <img src={newupdate2} style ={{width:`400px`, height:`350px`}}  alt="" />
                <div className="flex  lg:gap-28 mt-2">
                        <h1 className="text-textColor">Lorem ipsum dolor sit amet.</h1>
                        <a href="#">Read</a>
                    </div>
                </div>
                
            </div>
        </div>
        
        
        
        
        </>
     );
}
 
export default NewsUpDate;