import React from "react";
import { Container, Col, Accordion } from "react-bootstrap";
import {
  CpuChipIcon,
  ChartBarSquareIcon,
  BeakerIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import "../styles/About.css";

const iconMap = {
  CpuChipIcon: CpuChipIcon,
  ChartBarSquareIcon: ChartBarSquareIcon,
  BeakerIcon: BeakerIcon,
  ChartPieIcon: ChartPieIcon,
};

const About = () => {
  const { hero, intro, sections } = useSelector((state) => state.about);

  return (
    <>
      {/* 🔹 Hero Section */}
      <Container fluid className="about-hero-section">
        <div className="about-inner-container">
          <Col md={12} className="about-content">
            <h5 className="about-subheading">{hero.title}</h5>
            <p className="about-description">{hero.tagline}</p>
          </Col>
        </div>
      </Container>

      {/* 🔹 Accordion Section */}
      <section className="about-accordion-section">
        <Container>
          {/* ➕ Intro */}
          <div className="accordion-intro">
            <h2 className="text-uppercase">{intro.heading}</h2>
            <p className="accordion-intro-text">{intro.description}</p>
          </div>

          <hr className="pulse-line" />

          {/* 🔹 Accordion */}
          <Accordion defaultActiveKey="0" className="about-accordion">
            {sections.map((item) => {
              const IconComponent = iconMap[item.icon];
              return (
                <Accordion.Item eventKey={item.id.toString()} key={item.id}>
                  <Accordion.Header>
                    <IconComponent className="accordion-icon" />
                    {item.title}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordion-body-text">{item.description}</p>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Container>
      </section>
    </>
  );
};

export default About;
