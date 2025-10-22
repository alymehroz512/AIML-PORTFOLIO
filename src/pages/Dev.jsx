import React, { useEffect, useState } from "react";
import { Container, Col, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import "../styles/Dev.css";

const Dev = () => {
  const { hero, experience } = useSelector((state) => state.dev);

  // ✅ Responsive state
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 425);
  const [headers, setHeaders] = useState({
    name: window.innerWidth <= 425 ? "Bag" : "Dev Bag",
    desc: window.innerWidth <= 425 ? "Desc" : "Description",
    version: window.innerWidth <= 425 ? "Ver" : "Version",
    learn: window.innerWidth <= 425 ? "Go" : "Learn",
  });

  // ✅ Handle resize for live updates
  useEffect(() => {
    const handleResize = () => {
      const small = window.innerWidth <= 425;
      setIsSmallScreen(small);
      setHeaders({
        name: small ? "Bag" : "Dev Bag",
        desc: small ? "Desc" : "Description",
        version: small ? "Ver" : "Version",
        learn: small ? "Go" : "Learn",
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

          {/* 💼 Dev Experience Table */}
          <div className="dev-table-container">
            <Table hover responsive className="dev-table">
              <thead>
                <tr>
                  <th>{headers.name}</th>
                  {!isSmallScreen && <th>{headers.desc}</th>}
                  <th>{headers.version}</th>
                  <th>{headers.learn}</th>
                </tr>
              </thead>
              <tbody>
                {experience.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    {!isSmallScreen && <td>{item.desc}</td>}
                    <td>{item.version}</td>
                    <td>
                      {item.learn ? (
                        <a
                          href={item.learn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="learn-icon-button"
                          title={`Learn ${item.name}`}
                        >
                          <BookOpenIcon className="learn-icon" />
                        </a>
                      ) : (
                        <span className="no-link">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Dev;
