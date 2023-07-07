import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProductsThunk = createAsyncThunk(
  "thunkServices/getAllProductsThunk",
  async () => {
    let backendURL = "https://api.hiring.masterkey.tech/api/v1/products";
    try {
      const { data } = await axios.get(backendURL);
      console.log("💛thunkResponse:", data);
      return data;
    } catch (error) {
      console.log("💛error:", error);
    }
  }
);