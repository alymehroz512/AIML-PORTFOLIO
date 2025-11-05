// src/redux/aboutSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  hero: {
    title: "About Me",
    tagline: "Empowering lives through intelligent innovation",
  },
  intro: {
    heading: "What Drives My Work",
    description:
      "With over 10 years in AI/ML engineering, I specialize in building scalable, intelligent solutions that drive innovation and solve real-world challenges.",
  },
  sections: [
    {
      id: 0,
      title: "Artificial Intelligence",
      icon: "CpuChipIcon",
      description:
        "Experienced and results-driven Python Developer with over 10 years of hands-on experience in designing, developing, and deploying scalable web applications and APIs with a focus on AI/ML integration.",
      highlights: [
        "Seasoned AI/ML Engineer - Over 10 years of experience in designing, developing, and deploying scalable machine learning models and full-stack applications using Python, TensorFlow, PyTorch, and Scikit-learn.",
        "Leadership and Collaboration - Led teams at Lenovo and Inoxoft, mentoring juniors, conducting code reviews, and translating business needs into technical solutions with agile methodologies.",
        "Education and Certifications - MS in Computer Science from University of Bridgeport; certified in AWS ML Specialty, Google Cloud ML Engineer, Azure AI Engineer, CKA, and TensorFlow Developer.",
      ],
    },
    {
      id: 1,
      title: "Machine Learning",
      icon: "ChartBarSquareIcon",
      description:
        "Building robust ML systems with backend and frontend integration, MLOps practices, and cloud deployment for efficient, scalable solutions.",
      highlights: [
        "Full-Stack Expertise - Proficient in backend frameworks like Django, Flask, and FastAPI, paired with frontend technologies including React.js, Angular, and Vue.js, to build AI-integrated user platforms.",
        "MLOps Specialist - Implemented end-to-end ML pipelines with Docker, Kubernetes, MLflow, Kubeflow, and CI/CD tools like Jenkins and GitHub Actions for efficient model deployment and monitoring.",
        "Cloud and Big Data Pro - Hands-on with AWS (SageMaker, Lambda), Azure ML, GCP (Vertex AI), Apache Spark, Kafka, Airflow, and Databricks for scalable data processing and cloud-native solutions.",
      ],
    },
    {
      id: 2,
      title: "Deep Learning",
      icon: "BeakerIcon",
      description:
        "Specializing in advanced neural architectures and infrastructure for computer vision, NLP, and high-performance AI systems.",
      highlights: [
        "Database and DevOps Savvy - Designed optimized systems using PostgreSQL, MongoDB, Redis, and Elasticsearch; expertise in Git, Terraform, Prometheus, and Grafana for robust infrastructure.",
        "Deep Learning Focus - Specialized in neural networks, CNNs, RNNs, LSTMs, Transformers, BERT, computer vision, and NLP using Hugging Face and Keras.",
      ],
    },
    {
      id: 3,
      title: "Data Science",
      icon: "ChartPieIcon",
      description:
        "Driving insights, security, and innovation through data analysis, optimization, and cutting-edge project development.",
      highlights: [
        "Security and Performance - Ensured secure applications with OAuth2, JWT, RBAC, and OWASP practices; optimized APIs for low latency, high throughput, and real-time processing with Kafka and Flink.",
        "Innovative Projects - Developed distributed training platforms with PyTorch/Kubernetes, real-time ML pipelines handling 50k+ events/sec, and AutoML systems reducing development time by 80%.",
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