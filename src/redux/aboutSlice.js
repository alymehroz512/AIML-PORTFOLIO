// src/redux/aboutSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hero: {
    title: "About Me",
    tagline: "Building intelligent, human-centered systems.",
  },
  intro: {
    heading: "What Drives My Work",
    description:
      "My focus lies in creating intelligent systems that learn, adapt, and evolve — merging innovation with real-world problem-solving.",
  },
  sections: [
    {
      id: 0,
      title: "Artificial Intelligence",
      icon: "CpuChipIcon",
      description:
        "Designing intelligent systems that perceive, reason, and make data-driven decisions. AI bridges human-like intelligence with computational precision.",
    },
    {
      id: 1,
      title: "Machine Learning",
      icon: "ChartBarSquareIcon",
      description:
        "Leveraging algorithms that learn from data to predict, classify, and improve automatically over time — forming the core of automation and predictive analytics.",
    },
    {
      id: 2,
      title: "Deep Learning",
      icon: "BeakerIcon",
      description:
        "Using neural networks to model complex data patterns, powering breakthroughs in computer vision and natural language processing.",
    },
    {
      id: 3,
      title: "Data Science",
      icon: "ChartPieIcon",
      description:
        "Extracting actionable insights from data using Python, TensorFlow, and PyTorch — driving smarter decisions through analytics and visualization.",
    },
  ],
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    updateIntro: (state, action) => {
      state.intro.description = action.payload;
    },
  },
});

export const { updateIntro } = aboutSlice.actions;
export default aboutSlice.reducer;
