import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hero: {
    title: "My Skills",
    tagline: "Merging Technical Precision with Creative Intelligence",
    heading: "Core Competencies & Expertise",
    description:
      "An extensive collection of technical proficiencies and tools used to build intelligent, scalable, and production-grade AI systems.",
  },
  groupLabels: {
    core: "Core Experties",
    secondary: "Secondary & Supporting Experties",
  },
  skills: [
    // === CORE AI/ML SKILLS (12) ===
    {
      title: "Programming",
      icon: "CpuChipIcon",
      description:
        "Python, SQL, Scala, Java, JavaScript, Bash, C++ — proficient in writing clean, efficient, and modular code across multiple languages and paradigms.",
    },
    {
      title: "Machine Learning Frameworks",
      icon: "ChartBarSquareIcon",
      description:
        "TensorFlow, PyTorch, Scikit-learn, XGBoost, LightGBM, Keras, Hugging Face Transformers — hands-on experience building, training, and deploying ML models.",
    },
    {
      title: "Deep Learning",
      icon: "BeakerIcon",
      description:
        "Expertise in Neural Networks, CNNs, RNNs, LSTMs, Transformers, and BERT for tasks in Computer Vision and NLP domains.",
    },
    {
      title: "MLOps",
      icon: "CommandLineIcon",
      description:
        "MLflow, Kubeflow, DVC, Docker, Kubernetes, Jenkins, GitHub Actions, CI/CD, Model Monitoring — automating end-to-end ML pipelines for production.",
    },
    {
      title: "Cloud Platforms",
      icon: "CloudIcon",
      description:
        "AWS (SageMaker, Lambda, EC2, S3), Azure ML, GCP (Vertex AI, BigQuery) — deploying, monitoring, and scaling ML workloads on cloud environments.",
    },
    {
      title: "Big Data",
      icon: "ServerIcon",
      description:
        "Apache Spark, Hadoop, Kafka, Airflow, Databricks, Snowflake, Apache Beam — building and orchestrating large-scale data processing pipelines.",
    },
    {
      title: "Databases",
      icon: "ChartPieIcon",
      description:
        "PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, SQLite — designing relational and NoSQL schemas for performance and scalability.",
    },
    {
      title: "Web Development",
      icon: "GlobeAltIcon",
      description:
        "Django, Flask, FastAPI, Django REST Framework, Microservices — building secure, RESTful APIs and scalable back-end architectures.",
    },
    {
      title: "Data Science",
      icon: "ChartBarIcon",
      description:
        "Pandas, NumPy, Matplotlib, Seaborn, Jupyter, Statistical Analysis — transforming data into actionable business intelligence.",
    },
    {
      title: "DevOps",
      icon: "BoltIcon",
      description:
        "Git, Docker, Kubernetes, Terraform, Prometheus, Grafana, Linux — managing infrastructure and ensuring system reliability through automation.",
    },
    {
      title: "Computer Vision",
      icon: "BeakerIcon",
      description:
        "OpenCV, YOLO, MediaPipe, Albumentations, Image Segmentation, Object Detection — building real-time vision systems and pipelines.",
    },
    {
      title: "Natural Language Processing",
      icon: "ChartBarSquareIcon",
      description:
        "spaCy, NLTK, Gensim, Sentence Transformers, RAG, LLMs, Fine-tuning — advanced text processing, embeddings, and generative AI.",
    },

    // === SECONDARY & SUPPORTING SKILLS (12) ===
    {
      title: "Frontend Frameworks & Libraries",
      icon: "UserGroupIcon",
      description:
        "React.js, Angular, Vue.js, Svelte, TypeScript, Redux, Webpack, Babel — building interactive and performant user interfaces.",
    },
    {
      title: "UI/UX Design",
      icon: "PencilSquareIcon",
      description:
        "Responsive Design, Bootstrap, Material-UI, Tailwind CSS, CSS3, SASS/SCSS — crafting visually appealing and user-centered interfaces.",
    },
    {
      title: "API Development & Integration",
      icon: "CpuChipIcon",
      description:
        "GraphQL, RESTful API design, OpenAPI/Swagger, API Gateway — architecting scalable, secure, and interoperable APIs.",
    },
    {
      title: "Testing & Quality Assurance",
      icon: "ChartBarSquareIcon",
      description:
        "PyTest, UnitTest, Selenium, Cypress, Postman, TDD, BDD — ensuring code reliability through automation and rigorous testing practices.",
    },
    {
      title: "Authentication & Security",
      icon: "ShieldCheckIcon",
      description:
        "OAuth2, JWT, OpenID Connect, SSL/TLS, OWASP Security Practices, RBAC, CORS — implementing secure authentication and protecting data privacy.",
    },
    {
      title: "Version Control & Collaboration",
      icon: "CommandLineIcon",
      description:
        "Git, GitHub, GitLab, Bitbucket, PR workflows, code reviews — expert in collaborative development and version control best practices.",
    },
    {
      title: "Containerization & Orchestration",
      icon: "ServerIcon",
      description:
        "Docker, Docker Compose, Kubernetes, Helm, CI/CD pipelines — containerizing applications and orchestrating at scale.",
    },
    {
      title: "Monitoring & Logging",
      icon: "ChartBarIcon",
      description:
        "Prometheus, Grafana, ELK Stack, Loki, Sentry — real-time monitoring, alerting, and log aggregation for system health.",
    },
    {
      title: "Performance Optimization",
      icon: "BoltIcon",
      description:
        "Profiling, caching strategies, database indexing, CDN, lazy loading — optimizing speed and scalability across stack.",
    },
    {
      title: "Agile & Project Management",
      icon: "UserGroupIcon",
      description:
        "Scrum, Kanban, Jira, Trello, Confluence — leading cross-functional teams with agile methodologies and clear documentation.",
    },
    {
      title: "Data Engineering",
      icon: "ServerIcon",
      description:
        "ETL pipelines, Apache NiFi, dbt, Airbyte, Great Expectations — designing robust, fault-tolerant data workflows.",
    },
    {
      title: "AI Ethics & Governance",
      icon: "ShieldCheckIcon",
      description:
        "Bias detection, fairness auditing, model explainability, data privacy, GDPR, AI safety — ensuring responsible AI deployment.",
    },
  ],
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {},
});

export default skillsSlice.reducer;