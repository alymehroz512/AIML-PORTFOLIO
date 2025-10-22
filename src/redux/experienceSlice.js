import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hero: {
    title: "Professional Experience",
    tagline: "Empowering growth through smart technology",
    heading: "Experience Timeline",
    description:
      "A journey through diverse roles and responsibilities, building scalable solutions, mentoring teams, and shaping AI-driven strategies.",
  },
  experiences: [
    {
      company: "Lenovo",
      role: "Lead Python developer",
      duration: "February 2022 – Present",
      responsibilities: [
        "Led the design, development, and deployment of machine learning models using TensorFlow, PyTorch, and Scikit-learn.",
        "Built full-stack applications integrating AI/ML solutions with Django, Flask, and React.",
        "Developed scalable RESTful APIs and microservices for ML services.",
        "Architected and managed data pipelines with Apache Airflow and Apache Spark.",
        "Applied MLOps best practices using Docker, Kubernetes, Jenkins, and GitHub Actions.",
        "Mentored junior engineers and conducted code reviews.",
      ],
    },
    {
      company: "Inoxoft",
      role: "Senior AI/ML Engineer",
      duration: "December 2018 – January 2022",
      responsibilities: [
        "Developed AI/ML solutions using TensorFlow, PyTorch, and Scikit-learn.",
        "Implemented REST APIs and microservices using Flask, Django, and FastAPI.",
        "Managed MLOps pipelines with Airflow, Docker, Jenkins, and Kubernetes.",
        "Integrated cloud services (AWS, Azure) for model deployment and monitoring.",
        "Guided junior engineers and maintained CI/CD pipelines.",
      ],
    },
    {
      company: "Bloomfire",
      role: "Software Engineer",
      duration: "March 2015 – July 2018",
      responsibilities: [
        "Developed ML and AI-driven web apps using Python, TensorFlow, and Scikit-learn.",
        "Built full-stack web applications with Django, Flask, and React.",
        "Implemented CI/CD and containerization with Docker and Kubernetes.",
        "Designed optimized databases using PostgreSQL and MongoDB.",
        "Improved system performance using caching and async processing.",
      ],
    },
  ],
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {},
});

export default experienceSlice.reducer;
