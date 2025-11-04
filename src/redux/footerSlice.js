// src/redux/footerSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  year: new Date().getFullYear(),
  author: "Syed Faraz Mehdi",
  slogan: "Design — Code — Inspire — Shaping Ideas into Reality",
  links: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "DevTools", path: "/devtools" },
    { label: "Contact", path: "/contact" },
  ],
};

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    updateYear: (state, action) => {
      state.year = action.payload;
    },
    updateAuthor: (state, action) => {
      state.author = action.payload;
    },
    updateSlogan: (state, action) => {
      state.slogan = action.payload;
    },
    updateLinks: (state, action) => {
      state.links = action.payload;
    },
  },
});

export const { updateYear, updateAuthor, updateSlogan, updateLinks } =
  footerSlice.actions;
export default footerSlice.reducer;
