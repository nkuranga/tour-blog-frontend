/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";
import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { likeTour } from "../../redux/actions/tours";

const tour = ({
  tour: { _id, title, tags, description, name, createdAt, imageFile, likes },
}) => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();

  const userId = user?.user?._id || user?.user?.googleId;
  const excerpt = (str) => {
    if (str.length > 45) {
      str = str.substring(0, 45) + " ...";
    }
    return str;
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId) ? (
        <>
          <div className="flex justify-between items-center text-sm">
            <AiFillLike />
            &nbsp;
            {likes.length > 2 ? (
              <span>
                <p>{`Liked by You and ${likes.length - 1}others  `}</p>
              </span>
            ) : (
              `${likes.length} Like${likes.length > 1 ? "s" : ""}`
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center text-sm">
            <BiLike />
            &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
          </div>
        </>
      );
    }
    return (
      <>
        <div className="flex justify-between items-center text-sm">
          <BiLike />
          &nbsp;
          <span className=" text-sm">Like</span>
        </div>
      </>
    );
  };
  const handleClick = () => {
    dispatch(likeTour({ _id }));
  };

  return (
    <>
      {/* Section: Design Block  */}

      <div className="flex mb-6 lg:mb-6 shadow-lg p-5 ">
        <div>
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover  ripple shadow-lg rounded-lg mb-6"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img src={imageFile} className="w-full h-44" alt="Louvre" />
            <a href="#!">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                style={{ backgroundColor: `rgba(251, 251, 251, 0.2)` }}
              ></div>
            </a>
            <h3 className="text-white font-semibold top-4 capitalize ml-3 absolute">
              {name}
            </h3>
          </div>
          <div
            className="text-blue-700 mr-2 flex justify-end cursor-pointer "
            onClick={!user?.user ? null : handleClick}
          >
            <Likes />
          </div>
          <div className="flex justify-between">
            <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center">
              {tags.map((tag) => (
                <Link to={`/tour/toursByTag/${tag}`} key={tag}>
                  # {tag}&nbsp;
                </Link>
              ))}
            </div>
          </div>

          <h5 className="text-lg font-bold mb-3">{title}</h5>

          <p className="text-gray-500 mb-6">
            <small>
              Created <u>{moment(createdAt).fromNow()}</u> by &nbsp;
              <a href="/" className="text-gray-900">
                {name}
              </a>
            </small>
          </p>
          <p className="text-gray-500">{excerpt(description)}</p>
          <div className="flex space-x-2 justify-center">
            <Link
              to={`/tour/${_id}`}
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block mt-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight capitalize rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      {/* Section: Design Block  */}
    </>
  );
};

export default tour;
