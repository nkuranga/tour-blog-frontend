/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";

const navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font bg-white shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <BiDonateHeart className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full cursor-pointer" />
            <span className="ml-3 text-xl">Donate</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="transition-colors duration-200 transform  border-b-2 border-blue-500 mx-1.5 sm:mx-6 cursor-pointer">
              Home
            </a>
            <a className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:animate-bounce hover:border-blue-500 mx-1.5 sm:mx-6 cursor-pointer">
              News
            </a>
            <a className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform  hover:animate-bounce hover:border-blue-500 mx-1.5 sm:mx-6 cursor-pointer">
              Activities
            </a>
            <a className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform  hover:animate-bounce hover:border-blue-500 mx-1.5 sm:mx-6 cursor-pointer">
              Contact us
            </a>
          </nav>

          <div className="flex items-center">
            <div className="flex flex-grow-0">
              <div className="flex items-center">
                <AiFillFacebook
                  className="text-blue-900 w-10 cursor-pointer"
                  style={{ fontSize: "20px" }}
                />
                <AiFillTwitterCircle
                  className=" text-blue-300 w-10 cursor-pointer"
                  style={{ fontSize: "20px" }}
                />
                <button className="ml-35 px-2 bg-transparent border-2 border-yellow-500 p-2 pr-3 rounded animate-bounce flex justify-between items-center hover:bg-indigo-500 hover:border-indigo-500 hover:text-white">
                  <BiDonateHeart className="mr-2" />
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default navbar;
