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
  PencilSquareIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import "../styles/Skills.css";

const iconMap = {
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
  PencilSquareIcon,
  ShieldCheckIcon,
};

const Skill = () => {
  const { hero, skills, groupLabels } = useSelector((state) => state.skills);

  // 12 Core + 12 Secondary
  const coreSkills = skills.slice(0, 12);
  const secondarySkills = skills.slice(12, 24);

  const renderSkillCards = (skillList) =>
    skillList.map((skill, index) => {
      const IconComponent = iconMap[skill.icon];
      return (
        <Col
          md={12}
          lg={4}
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
    });

  return (
    <>
      {/* Hero Section */}
      <Container fluid className="skills-hero-section">
        <div className="skills-inner-container">
          <Col md={12} className="skills-content">
            <h5 className="skills-subheading">{hero.title}</h5>
            <p className="skills-description">{hero.tagline}</p>
          </Col>
        </div>
      </Container>

      {/* Skills Section */}
      <section className="skills-card-section">
        <Container>
          <div className="skills-intro">
            <h2 className="text-uppercase">{hero.heading}</h2>
            <p className="skills-intro-text">{hero.description}</p>
          </div>
          <hr className="pulse-line" />

          {/* Core AI/ML Skills - 12 Cards */}
          <div className="skills-group">
            <h3 className="skills-group-heading left-aligned">
              {groupLabels.core}
            </h3>
            <Row className="justify-content-center">
              {renderSkillCards(coreSkills)}
            </Row>
          </div>

          {/* Secondary Skills - 12 Cards */}
          <div className="skills-group">
            <h3 className="skills-group-heading left-aligned">
              {groupLabels.secondary}
            </h3>
            <Row className="justify-content-center">
              {renderSkillCards(secondarySkills)}
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Skill;