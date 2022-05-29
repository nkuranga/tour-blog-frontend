import React, { useEffect } from "react";
import "tw-elements";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "flowbite";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Home from "./pages/Home.jsx";
import AddTour from "./pages/AddTour.jsx";
import TourDetails from "./pages/TourDetails";
import { setUser } from "./redux/reducers/authSlice";
import Tours from "./dashboard/tours.jsx";
import EditTour from "./pages/EditTour.jsx";
import PrivateRoutes from "./components/privateRoutes.js";

import { useDispatch } from "react-redux";
import PageNotFound from "./pages/PageNotFound.jsx";
import TagTours from "./pages/TagTours.jsx";
function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);
  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/tour/search">
          <Home />
        </Route>
        <Route path="/tour/toursByTag/:tag">
          <TagTours />
        </Route>

        <Route path="/addTour">
          <PrivateRoutes>
            <AddTour />
          </PrivateRoutes>
        </Route>
        <Route path="/tour/:id">
          <TourDetails />
        </Route>

        <Route path="/dashboard">
          <PrivateRoutes>
            <Tours />
          </PrivateRoutes>
        </Route>
        <Route path="/editTour/:id">
          <PrivateRoutes>
            <EditTour />
          </PrivateRoutes>
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
