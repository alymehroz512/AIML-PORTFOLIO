import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hero: {
    title: "My Projects",
    tagline: "Pioneering innovation through practical software design",
    heading: "Project Showcase",
    description:
      "A curated selection of projects demonstrating full-stack development, AI integration, and scalable software architecture.",
  },
  projects: [], // no cards
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;
