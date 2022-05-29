import React from "react";
import "tw-elements";

function spiner({ className }) {
  return (
    <>
      <div className="flex justify-center items-center ml-2 mt-2">
        <div className={className}></div>
      </div>
    </>
  );
}

export default spiner;
