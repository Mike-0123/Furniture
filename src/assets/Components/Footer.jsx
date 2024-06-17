import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
const Section = () => {
  return (
    <>
      <div className="bg-footer flex justify-around h-full mt-20">
        <div className="">
          <h1 className="uppercase">HOMENEST</h1>
        </div>
        <div className="flex-col gap-8">
          <h1>Menu</h1>
          <div>
            <a href="">Home</a>
          </div>
          <div>
            <a href="">About</a>
          </div>
          <div>
            <a href="">Contact</a>
          </div>
          <div>
            <a href="">Buy</a>
          </div>
        </div>

        <div className="flex-col">
          <h1>Contact</h1>
          <div>Email:kaanama@weeeee.com</div>
          <div>Adrress:Kigali rubavu</div>
          <div>Lorem ipsum dolor sit.</div>
          <div>Lorem ipsum dolor sit.</div>
        </div>

        <div className="flex-col ">
          <h1>Social</h1>
          <div className="flex text-textColor">
            <div>
              <FaWhatsapp />
            </div>
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaFacebook />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className=" flex bg-footer pt-8 justify-between">
        <div className="text-black">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="text-black">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="text-black">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </>
  );
};

export default Section;
