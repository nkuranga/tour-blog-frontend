/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { signin, googleLogin } from "../redux/actions/auth";
import { GoogleLogin } from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import Spiner from "../components/Loaders/spiner";

const initialState = {
  email: "",
  password: "",
};
//production googleID:547007401961-8hq4f2409sujkh684v9flhmrv3lkei5m.apps.googleusercontent.com
const dotEnv = process.env.NODE_ENV !== "production";
const clientId = dotEnv
  ? "547007401961-imk631upmn61532ab83se24b6pj1hcrp.apps.googleusercontent.com"
  : "547007401961-8hq4f2409sujkh684v9flhmrv3lkei5m.apps.googleusercontent.com";

const login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;
  const history = useHistory();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => ({ ...state.auth }));

  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  const onChangeFormInput = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(signin({ formValue, history, toast }));
    }
  };
  const googleSuccess = (resp) => {
    const email = resp?.profileObj?.email;
    const name = resp?.profileObj?.name;
    const token = resp?.tokenId;
    const googleId = resp?.googleId;
    const user = { email, name, token, googleId };
    dispatch(googleLogin({ user, history, toast }));
  };
  const googleFailure = (error) => {
    toast.error(error);
  };
  return (
    <>
      <div className="w-full mt-16 max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h1 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
          LOGIN
        </h1>
        <form className="mt-6" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Username
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Enter Email"
              name="email"
              value={email}
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
                Password
              </label>
              <a
                href="/"
                className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
              >
                Forget Password?
              </a>
            </div>

            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="********"
              name="password"
              value={password}
              onChange={onChangeFormInput}
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Login{" "}
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
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <a
            href="/"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or login with Social Media
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>{" "}
        <div className="flex items-center mt-6 -mx-2">
          <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <button
                className="flex items-center justify-center w-full px-6 py-1 mx-2 text-gray-600 transition-colors duration-200 transform border cursor-pointer rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <div className="px-4 py-2">
                  <FcGoogle className="w-6 h-6" />
                </div>
                &nbsp;
                <span className="w-5/6 font-bold text-center">
                  Sign in with Google
                </span>
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          ></GoogleLogin>

          <a
            href="/"
            className="p-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
            </svg>
          </a>
        </div>
        <p className="mt-8 text-xs font-light text-center text-gray-400">
          {" "}
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
          >
            Create One
          </a>
        </p>
      </div>
    </>
  );
};

export default login;
