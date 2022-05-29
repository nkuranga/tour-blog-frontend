import React from "react";
import "tw-elements";
import { StyleRoot } from "radium";

const slider = () => {
  const style = {
    // Adding media query..
    "@media (max-width: 500px)": {
      height: "100%",
      marginBottom: "20px",
    },
  };
  return (
    <>
      <StyleRoot>
        <div
          id="carouselExampleCaptions"
          className="carousel slide relative "
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden h-80 sm:h-80 xl:h-96 2xl:h-96">
            <div className="carousel-item active relative float-left w-full">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                className="block w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute items-center justify-center text-center top-1/4">
                <h1 className=" font-bold" style={{ fontSize: "59px" }}>
                  First slide label
                </h1>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
                <button
                  type="button"
                  className="inline-block m-6 px-6 py-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Donate Now !
                </button>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                className="block w-full overflow-hidden "
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute items-center justify-center text-center top-1/4">
                <h1 className=" font-bold" style={{ fontSize: "59px" }}>
                  First slide label
                </h1>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
                <button
                  type="button"
                  className="inline-block m-6 px-6 py-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Donate Now !
                </button>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                className="block w-full h-auto"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute items-center justify-center text-center top-1/4">
                <h1 className=" font-bold" style={{ fontSize: "59px" }}>
                  First slide label
                </h1>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
                <button
                  type="button"
                  className="inline-block m-6 px-6 py-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Donate Now !
                </button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </StyleRoot>
    </>
  );
};

export default slider;
