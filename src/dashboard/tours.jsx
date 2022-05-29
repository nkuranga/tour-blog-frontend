/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/navbar2";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { getUserTour, deleteTour } from "../redux/actions/tours.js";
import moment from "moment";
import { toast } from "react-toastify";
import "flowbite";
import Modal from "../components/modals/modal";

const tours = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => ({ ...state.auth }));

  const { userTours } = useSelector((state) => ({ ...state.tour }));

  console.log(userTours);
  const userId = user?.user?._id;

  useEffect(() => {
    dispatch(getUserTour(userId));
  }, [dispatch, userId]);

  const handleDelete = (id) => {
    if (window.confirm("are you sure you want to delete this tour?")) {
      dispatch(deleteTour({ id, toast }));
    }
  };
  return (
    <div className="">
      <Navbar />
      <Modal />
      {/* <!-- Section: Design Block --> */}
      <h3 className="text-2xl font-bold mb-5 mt-5 text-center">
        DashBoard: {user?.user?.name}
      </h3>
      {userTours.map((tours) => (
        <section
          className="mb-10 shadow-lg rounded-md w-4/6 m-auto mt-5 border  text-gray-800 text-center md:text-left"
          key={tours._id}
        >
          <div className="flex flex-wrap mb-6 mt-4">
            <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
              <div
                className="relative mt-5 overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  src={tours.imageFile}
                  className="w-full h-full"
                  alt={tours.title}
                />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: `rgba(251, 251, 251, 0.2)` }}
                  ></div>
                </a>
              </div>
            </div>

            <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
              <div className="flex justify-between">
                <h5 className="text-lg font-bold mb-3">{tours.title}</h5>

                <div className="text-gray-500 mb-6 flex justify-between text-sm">
                  <small className="font-bold">
                    Created By: <u>{tours.name}</u> &nbsp; &nbsp;
                  </small>
                  <span className="flex">
                    <BsCalendar2Date size={15} className="mr-2" />
                    <p className="">{moment(tours.createdAt).fromNow()}</p>
                  </span>
                </div>
              </div>

              <p className="text-gray-500">
                {tours.description.substring(0, 250) + "..."}
              </p>

              <div className="flex justify-end mb-5">
                <div className="flex justify-between">
                  {/* <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenteredScrollable"
                  >
                    <BiEdit className="m-2 text-blue-700 cursor-pointer " />
                  </button> */}
                  <Link to={`/editTour/${tours._id}`}>
                    <BiEdit className="m-2 text-blue-700 cursor-pointer " />
                  </Link>
                  <AiFillDelete
                    className="m-2 text-red-700 cursor-pointer"
                    onClick={() => handleDelete(tours._id)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* <!-- Section: Design Block --> */}
    </div>
  );
};

export default tours;
