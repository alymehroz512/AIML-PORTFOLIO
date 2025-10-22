import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hero: {
    title: "Dev Insights",
    tagline: "Engineering creativity through AI, ML, and data-driven innovation",
    heading: "Developer Showcase",
    description:
      "Explore my decade-long journey in Artificial Intelligence and Machine Learning — from deep learning models to scalable data solutions.",
  },

  // headers handled dynamically in component now
  headers: {
    name: "Dev Bag",
    desc: "Description",
    version: "Version",
    learn: "Learn",
  },

  experience: [
    { name: "Python", desc: "Core programming language for AI/ML development", version: "3.12.x", learn: "https://docs.python.org/3/" },
    { name: "TensorFlow", desc: "End-to-end open-source platform for machine learning", version: "2.17.0", learn: "https://www.tensorflow.org/" },
    { name: "PyTorch", desc: "Deep learning framework for research and production", version: "2.4.1", learn: "https://pytorch.org/docs/stable/index.html" },
    { name: "Scikit-learn", desc: "Machine learning library for classical ML algorithms", version: "1.5.2", learn: "https://scikit-learn.org/stable/" },
    { name: "Keras", desc: "High-level neural networks API built on TensorFlow", version: "3.3.2", learn: "https://keras.io/" },
    { name: "NumPy", desc: "Library for numerical computations and data manipulation", version: "2.1.3", learn: "https://numpy.org/doc/" },
    { name: "Pandas", desc: "Data analysis and manipulation library", version: "2.2.3", learn: "https://pandas.pydata.org/docs/" },
    { name: "Matplotlib", desc: "2D plotting and visualization library for Python", version: "3.9.2", learn: "https://matplotlib.org/stable/index.html" },
    { name: "Seaborn", desc: "Statistical data visualization library", version: "0.13.2", learn: "https://seaborn.pydata.org/" },
    { name: "OpenCV", desc: "Computer vision and image processing library", version: "4.11.0", learn: "https://docs.opencv.org/" },
    { name: "NLTK", desc: "Natural language processing toolkit", version: "3.9.1", learn: "https://www.nltk.org/" },
    { name: "SpaCy", desc: "Industrial-strength NLP library for Python", version: "3.8.2", learn: "https://spacy.io/usage" },
    { name: "Transformers", desc: "Hugging Face library for LLMs and NLP", version: "4.45.1", learn: "https://huggingface.co/docs/transformers" },
    { name: "XGBoost", desc: "Gradient boosting framework for regression/classification", version: "2.1.2", learn: "https://xgboost.readthedocs.io/en/stable/" },
    { name: "LightGBM", desc: "Fast, distributed, high-performance gradient boosting", version: "4.5.0", learn: "https://lightgbm.readthedocs.io/en/stable/" },
    { name: "CatBoost", desc: "Gradient boosting library with categorical feature support", version: "1.2.5", learn: "https://catboost.ai/en/docs/" },
    { name: "Jupyter Notebook", desc: "Interactive computing and visualization environment", version: "7.3.1", learn: "https://jupyter-notebook.readthedocs.io/en/stable/" },
    { name: "Google Colab", desc: "Cloud-based Python notebook for ML experiments", version: "Latest (Cloud)", learn: "https://colab.research.google.com/" },
    { name: "AWS SageMaker", desc: "Cloud service for training and deploying ML models", version: "Latest (Cloud)", learn: "https://docs.aws.amazon.com/sagemaker/" },
    { name: "Azure ML Studio", desc: "Microsoft platform for machine learning model building", version: "Latest (Cloud)", learn: "https://learn.microsoft.com/en-us/azure/machine-learning/" },
    { name: "MLflow", desc: "Open-source platform for ML lifecycle management", version: "2.18.0", learn: "https://mlflow.org/docs/latest/index.html" },
    { name: "Docker", desc: "Containerization platform for model deployment", version: "27.2.0", learn: "https://docs.docker.com/" },
    { name: "Kubernetes", desc: "Container orchestration for scalable ML workloads", version: "1.31.x", learn: "https://kubernetes.io/docs/home/" },
    { name: "FastAPI", desc: "High-performance API framework for ML deployment", version: "0.115.2", learn: "https://fastapi.tiangolo.com/" },
    { name: "Streamlit", desc: "Building interactive ML dashboards and data apps", version: "1.39.0", learn: "https://docs.streamlit.io/" },
    { name: "Power BI", desc: "Data visualization and business analytics platform", version: "Latest (Desktop/Cloud)", learn: "https://learn.microsoft.com/en-us/power-bi/" },
    { name: "Tableau", desc: "Business intelligence and data visualization tool", version: "2025.x", learn: "https://help.tableau.com/current/guides/e-learning/en-us/home.htm" },
    { name: "Git", desc: "Version control system for ML code and models", version: "2.50.0", learn: "https://git-scm.com/doc" },
    { name: "GitHub", desc: "Collaboration and model versioning platform", version: "Latest (Cloud)", learn: "https://docs.github.com/en" },
  ],
};

const devSlice = createSlice({
  name: "dev",
  initialState,
  reducers: {},
});

export default devSlice.reducer;
