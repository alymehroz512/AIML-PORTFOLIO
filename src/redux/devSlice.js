import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hero: {
    title: "Dev Insights",
    tagline: "Engineering creativity through AI, ML, and data-driven innovation",
    heading: "Developer Showcase",
    description:
      "Explore my decade-long journey in Artificial Intelligence and Machine Learning — from deep learning models to scalable data solutions.",
  },
  experience: [
    { name: "Python", desc: "Core programming language for AI/ML development", experience: 10 },
    { name: "TensorFlow", desc: "End-to-end open-source platform for machine learning", experience: 7 },
    { name: "PyTorch", desc: "Deep learning framework for research and production", experience: 6 },
    { name: "Scikit-learn", desc: "Machine learning library for classical ML algorithms", experience: 8 },
    { name: "Keras", desc: "High-level neural networks API built on TensorFlow", experience: 7 },
    { name: "NumPy", desc: "Library for numerical computations and data manipulation", experience: 10 },
    { name: "Pandas", desc: "Data analysis and manipulation library", experience: 9 },
    { name: "Matplotlib", desc: "2D plotting and visualization library for Python", experience: 8 },
    { name: "Seaborn", desc: "Statistical data visualization library", experience: 6 },
    { name: "OpenCV", desc: "Computer vision and image processing library", experience: 5 },
    { name: "NLTK", desc: "Natural language processing toolkit", experience: 6 },
    { name: "SpaCy", desc: "Industrial-strength NLP library for Python", experience: 5 },
    { name: "Transformers", desc: "Hugging Face library for LLMs and NLP", experience: 4 },
    { name: "XGBoost", desc: "Gradient boosting framework for regression/classification", experience: 6 },
    { name: "LightGBM", desc: "Fast, distributed, high-performance gradient boosting", experience: 5 },
    { name: "CatBoost", desc: "Gradient boosting library with categorical feature support", experience: 4 },
    { name: "Jupyter Notebook", desc: "Interactive computing and visualization environment", experience: 9 },
    { name: "Google Colab", desc: "Cloud-based Python notebook for ML experiments", experience: 7 },
    { name: "AWS SageMaker", desc: "Cloud service for training and deploying ML models", experience: 5 },
    { name: "Azure ML Studio", desc: "Microsoft platform for machine learning model building", experience: 4 },
    { name: "MLflow", desc: "Open-source platform for ML lifecycle management", experience: 3 },
    { name: "Docker", desc: "Containerization platform for model deployment", experience: 6 },
    { name: "Kubernetes", desc: "Container orchestration for scalable ML workloads", experience: 4 },
    { name: "FastAPI", desc: "High-performance API framework for ML deployment", experience: 4 },
    { name: "Streamlit", desc: "Building interactive ML dashboards and data apps", experience: 5 },
    { name: "Power BI", desc: "Data visualization and business analytics platform", experience: 3 },
    { name: "Tableau", desc: "Business intelligence and data visualization tool", experience: 3 },
    { name: "Git", desc: "Version control system for ML code and models", experience: 10 },
    { name: "GitHub", desc: "Collaboration and model versioning platform", experience: 9 },
  ],
};

const devSlice = createSlice({
  name: "dev",
  initialState,
  reducers: {},
});

export default devSlice.reducer;