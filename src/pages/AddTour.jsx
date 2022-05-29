import React, { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar/navbar2";
import FileBase from "react-file-base64";
import ChipInput from "material-ui-chip-input";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Spiner from "../components/Loaders/spiner";

import { createTour } from "../redux/actions/tours";
const initialState = {
  title: "",
  description: "",
  tags: [],
};

function AddTour() {
  const [tourData, setTourData] = useState(initialState);

  const { title, description, tags } = tourData;
  const dispatch = useDispatch();
  const history = useHistory();
  const { error, loading } = useSelector((state) => ({
    ...state.tour,
  }));
  const { user } = useSelector((state) => ({ ...state.auth }));

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title && description && tags) {
      const updatedTourData = { ...tourData, name: user?.user?.name };
      dispatch(createTour({ updatedTourData, history, toast }));
      handleClear();
    }
  };

  const onChangeFormInput = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setTourData({ ...tourData, [name]: value });
  };

  const handlerDeleteTag = (deleteTag) => {
    setTourData({
      ...tourData,
      tags: tourData.tags.filter((tag) => tag !== deleteTag),
    });
  };

  const handlerAddTag = (tag) => {
    setTourData({ ...tourData, tags: [...tourData.tags, tag] });
  };
  const handleClear = () => {
    setTourData({ title: "", description: "", tags: "" });
  };
  return (
    <>
      <Navbar2 />
      <div className="w-full mt-16 mb-10 max-w-sm p-6 m-auto bg-white rounded-md shadow-2xl dark:bg-gray-800">
        <h1 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
          Add Tour
        </h1>
        <form className="mt-6" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Title
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Enter Email"
              name="title"
              value={title}
              onChange={onChangeFormInput}
              required
            />
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Description
              </label>
            </div>

            <textarea
              placeholder="Enter Description"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="description"
              value={description}
              onChange={onChangeFormInput}
              cols={5}
              rows={4}
            />
            <div className="flex items-center justify-between mt-4">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Tags
              </label>
            </div>
            <ChipInput
              name="tags"
              placeholder="Enter Tag"
              onDelete={(tag) => handlerDeleteTag(tag)}
              onAdd={(tag) => handlerAddTag(tag)}
              value={tags}
              className="w-full"
            />
            <div className="mt-4">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => {
                  setTourData({ ...tourData, imageFile: base64 });
                }}
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Submit
              {loading && (
                <Spiner
                  className="
              animate-spin
              rounded-full
              h-3
              w-3
              border-t-2 border-b-2 border-white
              "
                />
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTour;
