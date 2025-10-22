import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hero: {
    title: "Get In Touch",
    tagline: "Connecting ideas through conversation and collaboration",
    heading: "Contact Me",
    description:
      "Whether you’re looking to discuss a project, explore a partnership, or just say hello — I’d love to hear from you.",
  },
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
});

export default contactSlice.reducer;
