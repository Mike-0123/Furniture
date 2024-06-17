import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
<CiShoppingCart />
import React from "react";
const NavBar = () => {
    return ( 
        <>
        <div className="flex text-xlg w-full fixed z-10 top-0 justify-evenly pt-1 bg-gradient-to-b from-graadientFrom to-graadientTo text-white opacity-6 h-12">
            <div >
                <h1 className="uppercase">HOMENEST</h1>
            </div>
            <div className="flex gap-3 ">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Product</a>
                <a href="#">Blogs</a>

            </div>
            <div>
                <div className="flex items-center gap-2">
                Search<CiSearch/> 
                Cart<CiShoppingCart />
                <div >
                    <button className="ml-8 border-solid border-white border-[1px] rounded-md w-24 items-center">About</button>
                </div>
             
                </div>
            </div>

        </div>
        
        </>
     );
}
 
export default NavBar;