// src/redux/aboutSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hero: {
    title: "About Me",
    tagline: "Empowering lives through intelligent innovation.",
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
      highlights: [
        "10+ years developing intelligent automation systems across finance, healthcare, and retail.",
        "Architected AI-driven decision systems improving accuracy and efficiency by 40%.",
        "Integrated ethical AI principles ensuring fairness and transparency in deployed models.",
      ],
    },
    {
      id: 1,
      title: "Machine Learning",
      icon: "ChartBarSquareIcon",
      description:
        "Leveraging algorithms that learn from data to predict, classify, and improve automatically over time — forming the core of automation and predictive analytics.",
      highlights: [
        "8+ years of experience implementing predictive models using Python, scikit-learn, and XGBoost.",
        "Optimized ML pipelines for scalability and MLOps deployment on AWS and Azure.",
        "Collaborated cross-functionally with data engineers and analysts to improve model performance.",
      ],
    },
    {
      id: 2,
      title: "Deep Learning",
      icon: "BeakerIcon",
      description:
        "Using neural networks to model complex data patterns, powering breakthroughs in computer vision and natural language processing.",
      highlights: [
        "Developed CNN and Transformer-based architectures for image and NLP tasks.",
        "10 years of hands-on experience with TensorFlow, PyTorch, and OpenCV.",
        "Led deep learning projects in autonomous systems and facial recognition.",
      ],
    },
    {
      id: 3,
      title: "Data Science",
      icon: "ChartPieIcon",
      description:
        "Extracting actionable insights from data using Python, TensorFlow, and PyTorch — driving smarter decisions through analytics and visualization.",
      highlights: [
        "Built analytical dashboards and visualization systems using Power BI and Plotly.",
        "9+ years of experience in data preprocessing, feature engineering, and EDA.",
        "Delivered data-driven strategies that reduced operational costs by up to 30%.",
      ],
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
