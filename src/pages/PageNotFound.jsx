import React from "react";
import Navbar2 from "../components/Navbar/navbar2";

const PageNotFound = () => {
  return (
    <>
      <Navbar2 />
      <div className="m-3">
        <img
          className="w-full h-96 m-auto"
          src="image/page_not_found.jpeg"
          alt="Page Not Found"
        />
      </div>
    </>
  );
};

export default PageNotFound;
