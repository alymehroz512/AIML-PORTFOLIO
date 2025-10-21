import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  CpuChipIcon,
  ChartBarSquareIcon,
  BeakerIcon,
  ChartPieIcon,
  CloudIcon,
  CommandLineIcon,
  ChartBarIcon,
  ServerIcon,
  BoltIcon,
  UserGroupIcon,
  GlobeAltIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import "../styles/Skills.css";

const iconMap = {
  CpuChipIcon: CpuChipIcon,
  ChartBarSquareIcon: ChartBarSquareIcon,
  BeakerIcon: BeakerIcon,
  ChartPieIcon: ChartPieIcon,
  CloudIcon: CloudIcon,
  CommandLineIcon: CommandLineIcon,
  ChartBarIcon: ChartBarIcon,
  ServerIcon: ServerIcon,
  BoltIcon: BoltIcon,
  UserGroupIcon: UserGroupIcon,
  GlobeAltIcon: GlobeAltIcon,
  Cog6ToothIcon: Cog6ToothIcon,
  ShieldCheckIcon: ShieldCheckIcon,
};

const Skill = () => {
  const { hero, skills } = useSelector((state) => state.skills);

  return (
    <>
      {/* 🌌 Hero Section (Same as About Page Style) */}
      <Container fluid className="skills-hero-section">
        <div className="skills-inner-container">
          <Col md={12} className="skills-content">
            <h5 className="skills-subheading">{hero.title}</h5>
            <p className="skills-description">{hero.tagline}</p>
          </Col>
        </div>
      </Container>

      {/* 💎 Skills Cards Section */}
      <section className="skills-card-section">
        <Container>
          <div className="skills-intro">
            <h2 className="text-uppercase">{hero.heading}</h2>
            <p className="skills-intro-text">{hero.description}</p>
          </div>

          <hr className="pulse-line" />

          <Row className="justify-content-center">
            {skills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon];
              return (
                <Col
                  md={4}
                  sm={6}
                  xs={12}
                  key={index}
                  className="d-flex justify-content-center mb-4"
                >
                  <Card className="skill-card-vertical">
                    <div className="skill-card-body-vertical">
                      <div className="skill-icon-wrapper-vertical">
                        <IconComponent className="skill-square-icon" />
                      </div>
                      <h5 className="skill-title-vertical">{skill.title}</h5>
                      <p className="skill-description-vertical">
                        {skill.description}
                      </p>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Skill;
