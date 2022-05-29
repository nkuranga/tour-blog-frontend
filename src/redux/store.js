import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/authSlice";
import TourReducer from "./reducers/tourSlice";
export default configureStore({
  reducer: {
    auth: AuthReducer,
    tour: TourReducer,
  },
});
