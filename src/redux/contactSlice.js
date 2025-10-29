import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hero: {
    title: "Get In Touch",
    tagline: "Connecting ideas through conversation and collaboration",
    heading: "Contact Me",
    description:
      "Whether you’re looking to discuss a project, explore a partnership, or just say hello — I’d love to hear from you.",
  },
  contactCards: [
    {
      title: "Email",
      value: "hello@yourdomain.com",
      icon: "EnvelopeIcon",
    },
    {
      title: "Phone",
      value: "+1 (555) 123-4567",
      icon: "PhoneIcon",
    },
  ],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
});

export default contactSlice.reducer;