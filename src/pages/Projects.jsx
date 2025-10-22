import React from "react";
import { Container, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/Projects.css";

const Projects = () => {
  const { hero } = useSelector((state) => state.projects);

  return (
    <>
      {/* 🌌 Hero Section */}
      <Container fluid className="projects-hero-section">
        <div className="projects-inner-container">
          <Col md={12} className="projects-content">
            <h5 className="projects-subheading">{hero.title}</h5>
            <p className="projects-description">{hero.tagline}</p>
          </Col>
        </div>
      </Container>

      {/* 🖥 Projects Intro Section */}
      <section className="projects-card-section">
        <Container>
          <div className="projects-intro">
            <h2 className="text-uppercase">{hero.heading}</h2>
            <p className="projects-intro-text">{hero.description}</p>
          </div>

          <hr className="pulse-line" />
        </Container>
      </section>
    </>
  );
};

export default Projects;
