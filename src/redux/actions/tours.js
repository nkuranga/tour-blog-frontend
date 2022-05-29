import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createTour = createAsyncThunk(
  "tour/createTour",
  async ({ updatedTourData, history, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createTour(updatedTourData);
      toast.success("Tour Added");
      history.push("/home");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getTours = createAsyncThunk(
  "tour/getTours",
  async (page, { rejectWithValue }) => {
    try {
      const response = await api.getTours(page);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getTour = createAsyncThunk(
  "tour/getTour",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getTour(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUserTour = createAsyncThunk(
  "tour/getTourByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getUserTours(userId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteTour = createAsyncThunk(
  "tour/deleteTour",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteTour(id);
      toast.success("Tour is Deleted!!");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateTour = createAsyncThunk(
  "tour/updateTour",
  async ({ id, updatedTour, toast, history }, { rejectWithValue }) => {
    try {
      const response = await api.updateTour({ updatedTour, id });
      toast.success("Tour Updated");
      history.push("/home");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const searchTour = createAsyncThunk(
  "tours/searchTour",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await api.searchTour(searchQuery);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getTagTour = createAsyncThunk(
  "tours/getTourByTag",
  async (tag, { rejectWithValue }) => {
    try {
      const respnse = await api.getTagTours(tag);
      return respnse.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getRelatedTours = createAsyncThunk(
  "tours/getRelatedTour",
  async (tags, { rejectWithValue }) => {
    try {
      const respnse = await api.getRelatedTour(tags);
      return respnse.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const likeTour = createAsyncThunk(
  "tour/likeTour",
  async ({ _id }, { rejectWithValue }) => {
    try {
      const response = await api.likeTour(_id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
