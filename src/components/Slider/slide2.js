import React from "react";
import "flowbite";
import { slideContent } from "../DummyData/index";
import Modal from "../modals/modal";
import "./caption.css";
const slide2 = () => {
  return (
    <>
      <Modal />
      <div id="default-carousel" className="relative" data-carousel="slide">
        {/* <!-- Carousel wrapper --> */}
        <div className="overflow-hidden relative h-80 sm:h-96 xl:h-96 2xl:h-96">
          {/* <!-- Item 1 --> */}
          {slideContent.map((slide) => (
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item
              key={slide.id}
            >
              <div
                className="w-full bg-center bg-cover h-[32rem]"
                style={{
                  backgroundImage: `url(${slide.img})`,
                }}
              >
                {/* <img
                  src={slide.img}
                  className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                  alt="..."
                /> */}
              </div>
              <div className="flex absolute top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 ">
                <div className="flex-row items-center justify-center  w-full">
                  <div className="caption">
                    <h1
                      className="text-2xl text-center relative lg:p-2 lg:text-5xl capitalize font-extrabold "
                      style={{ fontFamily: "Playball" }}
                    >
                      {slide.title}
                    </h1>
                    <p className="text-center font-semibold relative lg:p-2 lg:-ml-19">
                      {slide.description}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      type="button"
                      data-modal-toggle="authentication-modal"
                      className="m-6 px-6 py-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Donate Now !
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <!-- Slider indicators --> */}
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default slide2;
