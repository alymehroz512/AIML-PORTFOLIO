import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/Experience.css";

const Experience = () => {
  const { hero, experiences } = useSelector((state) => state.experience);

  return (
    <>
      {/* 🌌 Hero Section */}
      <Container fluid className="experience-hero-section">
        <div className="experience-inner-container">
          <Col md={12} className="experience-content">
            <h5 className="experience-subheading">{hero.title}</h5>
            <p className="experience-description">{hero.tagline}</p>
          </Col>
        </div>
      </Container>

      {/* 💼 Experience Section */}
      <section className="experience-card-section">
        <Container>
          <div className="experience-intro">
            <h2 className="text-uppercase">{hero.heading}</h2>
            <p className="experience-intro-text">{hero.description}</p>
          </div>

          <hr className="pulse-line" />

          <Row className="justify-content-center">
            {experiences.map((exp, index) => (
              <Col xs={12} key={index} className="mb-5">
                <Card className="experience-card-vertical">
                  {/* 🎗 Ribbon (Flat on X-Axis) */}
                  <div className="experience-ribbon-flat">
                    PROFESSIONAL EXPERIENCE NO {index + 1}
                  </div>

                  <div className="experience-card-body-vertical">
                    <div className="experience-card-header">
                      <h5 className="experience-title-vertical">
                        {exp.role} | <span>{exp.company}</span>
                      </h5>
                      <p className="experience-date">{exp.duration}</p>
                    </div>
                    <ul className="experience-list">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Experience;
