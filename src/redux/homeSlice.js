// src/redux/homeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Syed Faraz Mehdi",
  titles: [
    "AI & ML Engineer",
    "Deep Learning Enthusiast",
    "Data Science Problem Solver",
  ],
  tagline: "Building Intelligent Systems with AI",
  descriptionFull:
    "I’m an AI & ML Engineer passionate about leveraging data and algorithms to build smart, human-centered systems. With expertise in Python, TensorFlow, PyTorch, and data science tools, I develop machine learning models that solve real-world problems. My work focuses on predictive analytics, computer vision, and natural language processing. I enjoy transforming raw data into intelligent insights and creating seamless integrations between AI models and production-ready applications.",
  descriptionShort:
    "I’m an AI & ML Engineer passionate about building intelligent and human-centered systems using data-driven algorithms. I focus on turning ideas into smart, efficient, and scalable AI solutions.",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    updateDescription: (state, action) => {
      state.descriptionFull = action.payload;
    },
  },
});

export const { updateDescription } = homeSlice.actions;
export default homeSlice.reducer;
