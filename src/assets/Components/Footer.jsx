import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Section = () => {
  return (
    <>
      {/* Footer Section */}
      <div className="bg-footer p-6 lg:p-8 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-16 mt-20">
        {/* Brand Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="uppercase text-xl lg:text-2xl font-bold">HOMENEST</h1>
        </div>

        {/* Menu Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-lg lg:text-xl font-semibold mb-4">Menu</h2>
          <a href="#" className="text-base lg:text-lg mb-2 hover:underline">Home</a>
          <a href="#" className="text-base lg:text-lg mb-2 hover:underline">About</a>
          <a href="#" className="text-base lg:text-lg mb-2 hover:underline">Contact</a>
          <a href="#" className="text-base lg:text-lg hover:underline">Buy</a>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-lg lg:text-xl font-semibold mb-4">Contact</h2>
          <div className="text-base lg:text-lg mb-2">Email: kaanama@weeeee.com</div>
          <div className="text-base lg:text-lg mb-2">Address: Kigali rubavu</div>
          <div className="text-base lg:text-lg mb-2">Lorem ipsum dolor sit.</div>
          <div className="text-base lg:text-lg">Lorem ipsum dolor sit.</div>
        </div>

        {/* Social Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-lg lg:text-xl font-semibold mb-4">Social</h2>
          <div className="flex gap-4 text-2xl lg:text-3xl text-textColor">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <hr className="my-4 border-gray-300" />
      <div className="bg-footer p-4 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
        <div className="text-base lg:text-lg text-black mb-2 lg:mb-0">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="text-base lg:text-lg text-black mb-2 lg:mb-0">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="text-base lg:text-lg text-black">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </>
  );
};

export default Section;
