import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import {
  EnvelopeIcon,
  PhoneIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import "../styles/Contact.css";

const Contact = () => {
  const { hero, contactCards } = useSelector((state) => state.contact);

  const iconMap = {
    EnvelopeIcon: EnvelopeIcon,
    PhoneIcon: PhoneIcon,
  };

  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleMessageChange = (e) => {
    const value = e.target.value;
    if (value.length > 1500) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      setMessage(value);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Container fluid className="contact-hero-section">
        <div className="contact-inner-container">
          <Col md={12} className="contact-content">
            <h5 className="contact-subheading">{hero.title}</h5>
            <p className="contact-description">{hero.tagline}</p>
          </Col>
        </div>
      </Container>

      {/* Contact Intro + Cards + Form */}
      <section className="contact-card-section">
        <Container>
          <div className="contact-intro">
            <h2 className="text-uppercase">{hero.heading}</h2>
            <p className="contact-intro-text">{hero.description}</p>
          </div>
          <hr className="pulse-line" />

          {/* Contact Info Cards */}
          <Row className="justify-content-center mb-5">
            {contactCards.map((card, index) => {
              const IconComponent = iconMap[card.icon];
              return (
                <Col
                  lg={4}
                  md={12}
                  sm={12}
                  xs={12}
                  key={index}
                  className="d-flex justify-content-center mb-5"
                >
                  <Card className="contact-card-vertical">
                    <div className="contact-card-body-vertical">
                      <div className="contact-header-horizontal">
                        <div className="contact-icon-wrapper-vertical">
                          <IconComponent className="contact-square-icon" />
                        </div>
                        <div className="contact-text-group">
                          <h5 className="contact-title-vertical">
                            {card.title}
                          </h5>
                          <p className="contact-description-vertical">
                            {card.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>

          {/* Full-Width Contact Form */}
          <Row className="justify-content-center">
            <Col md={10} lg={12} className="contact-form-col-full">
              <div className="contact-form-container">
                <h3 className="contact-form-heading">
                  Whether you have a project in mind or just want to connect,
                  I'm all ears! Fill out the form below to start the
                  conversation
                </h3>
                <Form className="p-3">
                  <Row>
                    <Col md={6}>
                      <Form.Floating className="mb-3">
                        <Form.Control type="text" placeholder="Name" id="name" />
                        <label htmlFor="name">Name</label>
                      </Form.Floating>
                    </Col>
                    <Col md={6}>
                      <Form.Floating className="mb-3">
                        <Form.Control type="email" placeholder="Email" id="email" />
                        <label htmlFor="email">Email</label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Floating className="mb-3">
                        <Form.Control type="text" placeholder="Phone" id="phone" />
                        <label htmlFor="phone">Phone Number</label>
                      </Form.Floating>
                    </Col>
                    <Col md={6}>
                      <Form.Floating className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Subject"
                          id="subject"
                        />
                        <label htmlFor="subject">Subject</label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <Form.Floating className="mb-4">
                    <Form.Control
                      as="textarea"
                      placeholder="Type your message here..."
                      id="message"
                      style={{ height: "220px" }}
                      maxLength={1500}
                      value={message}
                      onChange={handleMessageChange}
                      className="contact-message-box"
                    />
                    <label htmlFor="message">Message</label>
                    <div className="text-end small text-muted mt-2">
                      {message.length}/1500
                    </div>
                  </Form.Floating>

                  {/* Send Button - Left Aligned */}
                  <div className="d-flex justify-content-start">
                    <Button
                      variant="primary"
                      type="submit"
                      className="send-message-btn text-uppercase"
                      style={{ cursor: "none" }}
                    >
                      Send Message
                      <PaperAirplaneIcon className="send-icon ms-2" />
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>

          {/* Alert */}
          {showAlert && (
            <Alert
              variant="warning"
              className="contact-alert"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              Message cannot exceed 1500 characters.
            </Alert>
          )}
        </Container>
      </section>
    </>
  );
};

export default Contact;