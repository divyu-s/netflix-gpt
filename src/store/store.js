import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import geminiReducer from "./geminiSlice";
import configReducer from "./configSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gemini: geminiReducer,
    config: configReducer,
  },
});
