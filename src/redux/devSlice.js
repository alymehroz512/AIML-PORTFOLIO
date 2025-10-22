import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hero: {
    title: "Dev Insights",
    tagline: "Engineering creativity through code and collaboration",
    heading: "Developer Showcase",
    description:
      "Explore my development journey through innovative coding projects, web apps, and advanced software solutions.",
  },
};

const devSlice = createSlice({
  name: "dev",
  initialState,
  reducers: {},
});

export default devSlice.reducer;
