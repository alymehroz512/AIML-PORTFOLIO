import React, { useState } from "react";
import { Container, Col, Carousel, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";
import "../styles/Projects.css";

const Projects = () => {
  const { hero } = useSelector((state) => state.projects);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
  };

  const carouselImages = [carousel1, carousel2, carousel3, carousel4, carousel5];

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

          {/* 🎠 Carousel Section */}
          <div className="projects-carousel-container">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={null}
              indicators={false}
              controls={false}
            >
              {carouselImages.map((image, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100 projects-carousel-image"
                    src={image}
                    alt={`Project slide ${idx + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="carousel-controls">
              <Button
                variant="primary"
                className="carousel-btn text-uppercase"
                onClick={handlePrev}
                style={{ cursor: index === 0 ? "not-allowed" : "none" }}
                disabled={index === 0}
              >
                <ChevronLeftIcon className="carousel-icon" />
                Previous
              </Button>
              <Button
                variant="primary"
                className="carousel-btn text-uppercase"
                onClick={handleNext}
                style={{ cursor: index === 4 ? "not-allowed" : "none" }}
                disabled={index === 4}
              >
                Next
                <ChevronRightIcon className="carousel-icon" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Projects;