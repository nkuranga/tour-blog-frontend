import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillMail,
} from "react-icons/ai";

const header = () => {
  return (
    <>
      <div className="flex items-center lg:justify-end justify-center bg-blue-800 p-1 opacity-75">
        <div className="flex justify-end items-center text-white mr-6">
          <span>
            <AiFillFacebook size={20} className="m-1 mr-2 cursor-pointer" />
          </span>
          <span>
            <AiFillTwitterCircle
              size={20}
              className="m-1 mr-2 cursor-pointer"
            />
          </span>
          <span>
            <AiFillMail size={20} className="m-1 mr-2 cursor-pointer" />
          </span>
        </div>
      </div>
    </>
  );
};

export default header;
