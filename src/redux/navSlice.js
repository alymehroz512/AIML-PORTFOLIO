// src/redux/navSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isExpanded: false,
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

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setExpanded: (state, action) => {
      state.isExpanded = action.payload;
    },
    toggleExpanded: (state) => {
      state.isExpanded = !state.isExpanded;
    },
    collapseNav: (state) => {
      state.isExpanded = false;
    },
    setNavLinks: (state, action) => {
      state.links = action.payload;
    },
  },
});

export const { setExpanded, toggleExpanded, collapseNav, setNavLinks } =
  navSlice.actions;
export default navSlice.reducer;
