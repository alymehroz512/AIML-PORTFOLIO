import React from "react";
import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";
import Logo from "../assets/Logo.svg";
import FooterBg from "../assets/FooterBackground.jpg";
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
          <Container className="text-center">
            {/* LOGO + DESCRIPTION */}
            <div className="logo-section">
              <img src={Logo} alt="Logo" className="footer-logo" />
              <p className="footer-desc">
                Exploring creativity and innovation through technology & building impactful digital experiences.
              </p>
            </div>

            {/* NAVIGATION LINKS */}
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
                    fontSize: "20px",
                    marginRight: "5px",
                    verticalAlign: "middle",
                  }}
                />
                {year} <span className="footer-author">{author}</span> — {slogan}
              </p>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
