/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineTour } from "react-icons/md";
import { StyleRoot } from "radium";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../redux/reducers/authSlice";
import { useHistory } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { searchTour } from "../../redux/actions/tours";
import decode from "jwt-decode";
import RedirectPage from "../redirectPage";
const navbar2 = () => {
  const donateBtn = {
    "@media (maxWidth: 600px)": {
      display: `none`,
    },
  };
  const logo = {
    "@media (maxWidth: 600px)": {
      marginTop: `20px`,
    },
  };
  const menu = {
    "@media (maxWidth: 600px)": {
      backgroundColor: ``,
    },
  };

  const history = useHistory();

  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();

  const token = user?.token;
  if (token) {
    const decodedToken = decode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      dispatch(setLogout());
      <RedirectPage />;
    }
  }

  const logout = () => {
    dispatch(setLogout());
    history.push("/home");
  };

  const [search, setSearch] = useState("");
  console.log(search);

  const searchHandler = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(searchTour(search));
      history.push(`/tour/search/search?searchQuery=${search}`);
    } else {
      history.push("/home");
    }
  };

  return (
    <>
      <StyleRoot>
        <nav className="bg-white shadow-md border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link
              to="/home"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              style={logo}
            >
              <MdOutlineTour className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full cursor-pointer" />
              <span className="ml-3 text-xl">Tour</span>
            </Link>
            <div className="flex items-center md:order-2">
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Mobile Menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden lg:bg-none justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col lg:font-semibold uppercase mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <Link
                  to="/home"
                  className="block py-2 lg:bg-transparent pl-2 lg:border-b-2 lg:border-blue-500 border-b border-gray-200 hover:border-blue-500 md:bg-transparent md:p-0 dark:text-white"
                >
                  Home
                </Link>
                {user?.user?._id && (
                  <>
                    <Link
                      to="/addTour"
                      className="block  py-2 lg:bg-transparent pl-2 lg:border-b-2 lg:border-transparent border-b border-gray-200  hover:border-blue-500  md:bg-transparent  md:p-0 dark:text-white"
                    >
                      Add Tour
                    </Link>
                    <Link
                      to="/dashboard"
                      className="block  py-2 lg:bg-transparent pl-2 lg:border-b-2 lg:border-transparent border-b border-gray-200  hover:border-blue-500  md:bg-transparent  md:p-0 dark:text-white"
                    >
                      Dashboard
                    </Link>
                  </>
                )}
                {user?.user?._id ? (
                  <div
                    onClick={logout}
                    className="block py-2 cursor-pointer lg:bg-transparent pl-2 lg:border-b-2 lg:border-transparent border-b border-gray-200  hover:border-blue-500  md:bg-transparent  md:p-0 dark:text-white"
                  >
                    Logout{" "}
                    <span className="capitalize text-blue-500">
                      ({user?.user?.name})
                    </span>
                  </div>
                ) : (
                  <Link
                    to="/"
                    className="block  py-2 lg:bg-transparent pl-2 lg:border-b-2 lg:border-transparent border-b border-gray-200  hover:border-blue-500  md:bg-transparent  md:p-0 dark:text-white"
                  >
                    LogIn
                  </Link>
                )}
                <form className="flex" onChange={searchHandler}>
                  <input
                    className="block h-5 px-4 -mb-3 -mt-2 py-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Tour...!"
                  />
                  <button onClick={searchHandler}>
                    <RiSearchLine size={20} className="-ml-7 mb-2" />
                  </button>
                </form>
              </ul>
            </div>
          </div>
        </nav>
      </StyleRoot>
    </>
  );
};

export default navbar2;
