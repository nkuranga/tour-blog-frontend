/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";
import { useSelector } from "react-redux";
import RedirectPage from "./redirectPage";

const privateRoutes = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state.auth }));

  return user ? children : <RedirectPage />;
};

export default privateRoutes;
