import React from "react";
import { Container, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/Contact.css";

const Contact = () => {
  const { hero } = useSelector((state) => state.contact);

  return (
    <>
      {/* 🌌 Hero Section */}
      <Container fluid className="contact-hero-section">
        <div className="contact-inner-container">
          <Col md={12} className="contact-content">
            <h5 className="contact-subheading">{hero.title}</h5>
            <p className="contact-description">{hero.tagline}</p>
          </Col>
        </div>
      </Container>

      {/* 📨 Contact Intro Section */}
      <section className="contact-card-section">
        <Container>
          <div className="contact-intro">
            <h2 className="text-uppercase">{hero.heading}</h2>
            <p className="contact-intro-text">{hero.description}</p>
          </div>

          <hr className="pulse-line" />
        </Container>
      </section>
    </>
  );
};

export default Contact;
