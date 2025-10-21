import React from "react";
import { Container, Col, Accordion } from "react-bootstrap";
import {
  CpuChipIcon,
  ChartBarSquareIcon,
  BeakerIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";
import "../styles/About.css";

const About = () => {
  return (
    <>
      {/* 🔹 Hero Section */}
      <Container fluid className="about-hero-section">
        <div className="about-inner-container">
          <Col md={12} className="about-content">
            <h5 className="about-subheading">About Me</h5>
            <p className="about-description">
              Building intelligent, human-centered systems.
            </p>
          </Col>
        </div>
      </Container>

      {/* 🔹 Accordion Section */}
      <section className="about-accordion-section">
        <Container>
          {/* ➕ Intro */}
          <div className="accordion-intro">
            <h2 className="text-uppercase">What Drives My Work</h2>
            <p className="accordion-intro-text">
              My focus lies in creating intelligent systems that learn, adapt,
              and evolve — merging innovation with real-world problem-solving.
            </p>
          </div>

          {/* 🔹 Pulse Animated Divider */}
          <hr className="pulse-line" />

          {/* 🔹 Accordion */}
          <Accordion defaultActiveKey="0" className="about-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <CpuChipIcon className="accordion-icon" />
                Artificial Intelligence
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-body-text">
                  Designing intelligent systems that perceive, reason, and make
                  data-driven decisions. AI bridges human-like intelligence with
                  computational precision.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <ChartBarSquareIcon className="accordion-icon" />
                Machine Learning
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-body-text">
                  Leveraging algorithms that learn from data to predict,
                  classify, and improve automatically over time — forming the
                  core of automation and predictive analytics.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <BeakerIcon className="accordion-icon" />
                Deep Learning
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-body-text">
                  Using neural networks to model complex data patterns, powering
                  breakthroughs in computer vision and natural language
                  processing.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <ChartPieIcon className="accordion-icon" />
                Data Science
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-body-text">
                  Extracting actionable insights from data using Python,
                  TensorFlow, and PyTorch — driving smarter decisions through
                  analytics and visualization.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </>
  );
};

export default About;
