/* eslint-disable no-undef */
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const signin = createAsyncThunk(
  "auth/login",
  async ({ formValue, history, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signin(formValue);
      toast.success("You are Logged !!");
      history.push("/home");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const registration = createAsyncThunk(
  "auth/register",
  async ({ formValue, history, toast }, { rejectWithValue }) => {
    try {
      const response = api.register(formValue);
      toast.success("Registered well!!");
      history.push("/home");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async ({ user, history, toast }, { rejectWithValue }) => {
    try {
      const response = api.googleId(user);
      toast.success("Google Sign-in Successfully!");
      history.push("/home");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
