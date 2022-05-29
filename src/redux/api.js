import axios from "axios";

const dotEnv = process.env.NODE_ENV !== "production";
const { REACT_APP_DEV_API, RACT_APP_PROD_API } = process.env;

const API = axios.create({
  baseURL: `${dotEnv ? REACT_APP_DEV_API : RACT_APP_PROD_API}`,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signin = (formData) => API.post("/users/api/signin", formData);
export const register = (formData) => API.post("/users/api/signup", formData);
export const googleId = (user) => API.post("/users/api/googleId", user);

export const createTour = (tourData) =>
  API.post("/tours/api/createTour", tourData);

export const getTours = (page) => API.get(`/tours/api/getTours?page=${page}`);
export const getTour = (id) => API.get(`/tours/api/getTour/${id}`); // id -> tourID
export const getUserTours = (userId) =>
  API.get(`/tours/api/getTourByUser/${userId}`); //id -> user_id

export const deleteTour = (id) => API.delete(`/tours/api/deleteTour/${id}`);
export const updateTour = (updatedTour, id) =>
  API.patch(`/tours/api/updateTour/${id}`, updatedTour);
export const searchTour = (searchQuery) =>
  API.get(`/tours/api/search?searchQuery=${searchQuery}`);
export const getTagTours = (tag) => API.get(`/tours/api/getTourByTag/${tag}`);
export const getRelatedTour = (tags) =>
  API.get("/tours/api/getRelatedTour", tags);

export const likeTour = (_id) => API.patch(`/tours/api/like/${_id}`);
