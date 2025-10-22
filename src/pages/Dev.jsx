import React from "react";
import { Container, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/Dev.css";

const Dev = () => {
  const { hero } = useSelector((state) => state.dev);

  return (
    <>
      {/* 🌌 Hero Section */}
      <Container fluid className="dev-hero-section">
        <div className="dev-inner-container">
          <Col md={12} className="dev-content">
            <h5 className="dev-subheading">{hero.title}</h5>
            <p className="dev-description">{hero.tagline}</p>
          </Col>
        </div>
      </Container>

      {/* 🖥 Dev Intro Section */}
      <section className="dev-card-section">
        <Container>
          <div className="dev-intro">
            <h2 className="text-uppercase">{hero.heading}</h2>
            <p className="dev-intro-text">{hero.description}</p>
          </div>

          <hr className="pulse-line" />
        </Container>
      </section>
    </>
  );
};

export default Dev;
