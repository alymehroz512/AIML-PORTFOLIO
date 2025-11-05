// src/features/homeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Syed Faraz Mehdi",
  tagline: "Building Intelligent Systems with AI",
  // NOTE: 'icon' values must match actual named exports from @heroicons/react/24/outline
  professionalSummary: [
    {
      title: "Senior Python Developer",
      description:
        "Highly accomplished and detail-oriented Senior Python Developer with over a decade of proven expertise in architecting, developing, and optimizing dynamic web applications and enterprise-grade APIs.",
      icon: "CpuChipIcon",
    },
    {
      title: "Backend Engineering & Frameworks",
      description:
        "Experienced in leveraging Python frameworks such as Django, Flask, and FastAPI to build high-performance backend systems, ensuring scalability, modularity, and maintainability.",
      icon: "CodeBracketIcon",
    },
    {
      title: "Cloud & DevOps Integration",
      description:
        "Deep understanding of cloud infrastructure on AWS, Azure, and GCP, coupled with DevOps tools like Docker, Kubernetes, Jenkins, and CI/CD pipelines to streamline development workflows.",
      icon: "CloudIcon",
    },
    {
      title: "Database & Data Management",
      description:
        "Proficient in managing complex databases including PostgreSQL, MySQL, and MongoDB, focusing on data integrity, performance optimization, and scalability.",
      icon: "ServerIcon",
    },
    {
      title: "Collaboration & Leadership",
      description:
        "Renowned for writing efficient, well-structured code, adhering to agile practices, mentoring teams, and delivering secure, user-focused software solutions.",
      icon: "UsersIcon",
    },
  ],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
});

export default homeSlice.reducer;
