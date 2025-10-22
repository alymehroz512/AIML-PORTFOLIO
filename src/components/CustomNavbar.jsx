import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CustomNavbar.css';
import Logo from '../assets/Logo.svg';
import { HiMenuAlt3, HiX } from "react-icons/hi";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      className="bg-black"
      fixed="top"
      expanded={expanded}
      onToggle={(nextExpanded) => setExpanded(nextExpanded)}
    >
      {/* Logo */}
      <Navbar.Brand>
        <img src={Logo} alt="Logo" className="logo ms-3" />
      </Navbar.Brand>

      {/* Mobile Toggle Icon */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-0">
        {expanded ? <HiX color="white" size={24} /> : <HiMenuAlt3 color="white" size={24} />}
      </Navbar.Toggle>

      {/* Navbar Links */}
      <Navbar.Collapse id="basic-navbar-nav" className="ms-3">
        <Nav className="ms-auto mt-1 mx-3">
          <Nav.Link as={NavLink} to="/" onClick={handleNavClick} className="text-white nav-link-custom">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" onClick={handleNavClick} className="text-white nav-link-custom">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/skills" onClick={handleNavClick} className="text-white nav-link-custom">
            Skills
          </Nav.Link>
          <Nav.Link as={NavLink} to="/experience" onClick={handleNavClick} className="text-white nav-link-custom">
            Experience
          </Nav.Link>
          <Nav.Link as={NavLink} to="/projects" onClick={handleNavClick} className="text-white nav-link-custom">
            Projects
          </Nav.Link>
          <Nav.Link as={NavLink} to="/devtools" onClick={handleNavClick} className="text-white nav-link-custom">
            DevTools
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" onClick={handleNavClick} className="text-white nav-link-custom">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
