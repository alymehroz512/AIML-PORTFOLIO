import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";
import Logo from "../assets/Logo.svg";
import FooterBg from "../assets/FooterBackground.jpg"; // replace with your image
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  const { year, author, slogan, links } = useSelector((state) => state.footer);

  return (
    <footer className="footer">
      <div
        className="footer-bg"
        style={{
          backgroundImage: `url(${FooterBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="footer-overlay"></div>

        <div className="footer-content">
          <Container>
            <Row className="align-items-start">
              <Col xs={12}>
                {/* Logo + Description */}
                <div className="logo-section">
                  <img src={Logo} alt="Logo" className="footer-logo" />
                  <p className="footer-desc">
                    Exploring creativity and innovation through technology &
                    Building impactful digital experiences.
                  </p>
                </div>

                {/* Navigation Links */}
                <div className="footer-nav-container">
                  <Nav className="footer-nav">
                    {links.map((link, index) => (
                      <Nav.Link
                        as={NavLink}
                        to={link.path}
                        key={index}
                        className="footer-link"
                      >
                        {link.label}
                      </Nav.Link>
                    ))}
                  </Nav>
                </div>

                {/* COPYRIGHT SECTION */}
                <div className="footer-bottom">
                  <p>
                    <MdCopyright
                      style={{
                        fontSize: "26px",
                        marginRight: "5px",
                        verticalAlign: "middle",
                        marginTop: '-5px'
                      }}
                    />
                    {year}{" "}
                    <span className="footer-author">{author}</span> — {slogan}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
