// src/pages/Home.jsx
import React from "react";
import { Container, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/Home.css";
// ✅ Import all icons you use
import * as Icons from "@heroicons/react/24/outline";
import { EyeIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const Home = () => {
  const { name, tagline, professionalSummary } = useSelector(
    (state) => state.home
  );
  // ✅ Helper function to get the actual icon component by name
  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent className="timeline-square-icon" /> : null;
  };
  return (
    <>
      {/* 🌌 Hero Section */}
      <Container fluid className="hero-section">
        <div className="inner-container">
          <Col md={12} className="hero-content">
            <h1 className="hero-heading">Hi, I’m {name}</h1>
            <p className="hero-subheading">{tagline}</p>
            <div className="hero-buttons">
              <NavLink to="/projects" className="hero-button">
                View Projects
                <EyeIcon className="icon" />
              </NavLink>
              <a
                href="/assets/AliMehroz_CV.pdf"
                download
                className="hero-button"
              >
                Download CV
                <ArrowDownTrayIcon className="icon" />
              </a>
            </div>
          </Col>
        </div>
      </Container>
      {/* 🧠 Professional Summary Numbered Timeline Section */}
      <section className="timeline-section">
        <Container>
          <div className="timeline-intro">
            <h2 className="timeline-heading text-uppercase">
              Professional Summary
            </h2>
            <p className="timeline-intro-text">
              Explore the key phases of my career, highlighting expertise and
              achievements in full-stack development and innovative solutions.
            </p>
          </div>
          <hr className="pulse-line" />
          <div className="timeline">
            {professionalSummary.map((item, index) => (
              <div
                key={index}
                className="timeline-item"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-content">
                  <div className="timeline-icon-wrapper">
                    {getIcon(item.icon)}
                  </div>
                  <div className="timeline-text-wrapper">
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
export default Home;