/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Pagination = ({
  setCurrentPage,
  currentPage,
  numberOfPage,
  dispatch,
}) => {
  const renderPagination = () => {
    if (currentPage === numberOfPage && currentPage === 1) return null;
    if (currentPage === 1) {
      return (
        <div className="flex justify-center mb-5">
          <div className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed dark:bg-gray-900 dark:text-gray-600">
            <GrFormPrevious />
          </div>

          <div className="hidden px-4 py-2 mx-1 shadow-lg text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
            1
          </div>

          <div className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
            <GrFormNext
              onClick={() => dispatch(setCurrentPage(currentPage + 1))}
            />
          </div>
        </div>
      );
    } else if (currentPage !== numberOfPage) {
      return (
        <div className="flex justify-center mb-5">
          <div className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-pointer dark:bg-gray-900 dark:text-gray-600">
            <GrFormPrevious
              onClick={() => dispatch(setCurrentPage(currentPage - 1))}
            />
          </div>

          <div className="hidden px-4 py-2 mx-1 shadow-lg text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
            {currentPage}
          </div>

          <div className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
            <GrFormNext
              onClick={() => dispatch(setCurrentPage(currentPage + 1))}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center mb-5">
          <div className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-pointer dark:bg-gray-900 dark:text-gray-600">
            <GrFormPrevious
              onClick={() => dispatch(setCurrentPage(currentPage - 1))}
            />
          </div>

          <div className="hidden px-4 py-2 mx-1 shadow-lg text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
            {currentPage}
          </div>

          <div className="flex cursor-not-allowed items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white ">
            <GrFormNext />
          </div>
        </div>
      );
    }
  };
  return <div>{renderPagination()}</div>;
};

export default Pagination;
