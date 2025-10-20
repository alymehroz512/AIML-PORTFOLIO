import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "About Me",
  description: "Building intelligent, human-centered systems.",
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setAboutContent: (state, action) => {
      state.title = action.payload.title || state.title;
      state.description = action.payload.description || state.description;
    },
  },
});

export const { setAboutContent } = aboutSlice.actions;
export default aboutSlice.reducer;
