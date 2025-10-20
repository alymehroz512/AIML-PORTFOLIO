import React from "react";
import { Container, Col } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { EyeIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <Container fluid className="hero-section">
      <div className="inner-container">
        <Col md={12} className="hero-content">
          <h1 className="hero-heading">
            <TypeAnimation
              sequence={[
                "Hi, I’m Syed Faraz Mehdi",
                1500,
                "AI & ML Engineer",
                1500,
                "Deep Learning Enthusiast",
                1500,
                "Data Science Problem Solver",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </h1>

          <p className="hero-subheading">Building Intelligent Systems with AI</p>

          {/* Full paragraph for desktops and tablets */}
          <p className="hero-subheading-small full-text">
            I’m an AI/ML Engineer passionate about leveraging data and algorithms
            to build smart, human-centered systems. With expertise in Python,
            TensorFlow, PyTorch, and data science tools, I develop machine
            learning models that solve real-world problems. My work focuses on
            predictive analytics, computer vision, and natural language
            processing. I enjoy transforming raw data into intelligent insights
            and creating seamless integrations between AI models and
            production-ready applications.
          </p>

          {/* Slightly longer short paragraph for mobile screens */}
          <p className="hero-subheading-small short-text">
            I’m an AI/ML Engineer passionate about building intelligent and
            human-centered systems using data-driven algorithms. I focus on
            turning ideas into smart, efficient, and scalable AI solutions.
          </p>

          <div className="hero-buttons">
            <NavLink to="/projects" className="hero-button">
              View Projects
              <EyeIcon className="icon" />
            </NavLink>

            <a href="/assets/AliMehroz_CV.pdf" download className="hero-button">
              Download CV
              <ArrowDownTrayIcon className="icon" />
            </a>
          </div>
        </Col>
      </div>
    </Container>
  );
};

export default Home;
