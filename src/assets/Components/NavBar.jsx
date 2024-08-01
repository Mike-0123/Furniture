import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import React from "react";

const NavBar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-10 bg-gradient-to-r from-black via-gray-800 to-gray-600 text-white opacity-90 h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div>
                <h1 className="text-xl sm:text-2xl font-bold uppercase">HOMENEST</h1>
            </div>
            <div className="hidden md:flex gap-6">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">About</a>
                <a href="#" className="hover:underline">Product</a>
                <a href="#" className="hover:underline">Blogs</a>
            </div>
            <div className="flex items-center gap-4">
                <span className="hidden md:inline-flex items-center gap-2">
                    Search <CiSearch />
                    Cart <CiShoppingCart />
                </span>
                <button className="ml-4 border border-white rounded-md px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition">
                    About
                </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <button className="text-xl">☰</button>
            </div>
        </div>
    );
};

export default NavBar;
