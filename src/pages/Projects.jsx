import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/Projects.css";

/* ---------- PROJECT IMAGES ---------- */
import Project1 from "../assets/Project1.jpg";
import Project2 from "../assets/Project2.jpg";
import Project3 from "../assets/Project3.jpg";
import Project4 from "../assets/Project4.jpg";
import Project5 from "../assets/Project5.jpg"; // Add your CyberPunk image here

/* ---------- ICON IMPORTS ---------- */
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaJsSquare,
  FaLock,
  FaUnity,
  FaGithub,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiMongodb,
  SiFigma,
  SiExpress,
  SiOpenai,
  SiTailwindcss,
  SiFlask,
  SiFastapi,
  SiOpencv,
  SiRos,
  SiBlender,
  SiAmazonwebservices,
  SiGooglecloud,
  SiPostman,
  SiBlockchaindotcom,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { VscVscode, VscAzure } from "react-icons/vsc";
import { MdAnimation } from "react-icons/md";

const Projects = () => {
  const { hero, projects } = useSelector((state) => state.projects);

  /* ---------- ICON MAP ---------- */
  const toolIcons = {
    Python: <FaPython size={30} color="#3776AB" />,
    TensorFlow: <SiTensorflow size={30} color="#FF6F00" />,
    PyTorch: <SiPytorch size={30} color="#EE4C2C" />,
    React: <FaReact size={30} color="#61DAFB" />,
    "React Native": <FaReact size={30} color="#61DAFB" />,
    Nextjs: <FaReact size={30} color="#000000" />,
    "Node.js": <FaNodeJs size={30} color="#43853D" />,
    Express: <SiExpress size={30} color="#000000" />,
    Flask: <SiFlask size={30} color="#000000" />,
    FastAPI: <SiFastapi size={30} color="#009688" />,
    MongoDB: <SiMongodb size={30} color="#47A248" />,
    JavaScript: <FaJsSquare size={30} color="#F7DF1E" />,
    GitHub: <FaGithub size={30} color="#181717" />,
    Docker: <FaDocker size={30} color="#2496ED" />,
    Figma: <SiFigma size={30} color="#F24E1E" />,
    "OpenAI API": <SiOpenai size={30} color="#412991" />,
    TailwindCSS: <SiTailwindcss size={30} color="#06B6D4" />,
    "Framer Motion": <MdAnimation size={30} color="#C678DD" />,
    Threejs: <TbBrandThreejs size={30} color="#000000" />,
    OpenCV: <SiOpencv size={30} color="#5C3EE8" />,
    ROS: <SiRos size={30} color="#223C4E" />,
    Blender: <SiBlender size={30} color="#F97316" />,
    Unity: <FaUnity size={30} color="#222C37" />,
    AWS: <SiAmazonwebservices size={30} color="#FF9900" />,
    "Google Cloud": <SiGooglecloud size={30} color="#4285F4" />,
    Azure: <VscAzure size={30} color="#0078D4" />,
    "VS Code": <VscVscode size={30} color="#007ACC" />,
    Postman: <SiPostman size={30} color="#FF6C37" />,
    Blockchain: <SiBlockchaindotcom size={30} color="#29B6F6" />,
    JWT: <FaLock size={30} color="#FFB300" />,
  };

  const Placeholder = (
    <div
      style={{
        width: 30,
        height: 30,
        background: "#ccc",
        borderRadius: "50%",
        display: "inline-block",
      }}
    />
  );

  const getImage = (idx) => {
    const images = [Project1, Project2, Project3, Project4, Project5];
    return images[idx] || Project1;
  };

  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <Container fluid className="projects-hero-section">
        <div className="projects-inner-container">
          <div className="projects-content">
            <h5 className="projects-subheading">{hero.title}</h5>
            <p className="projects-description">{hero.tagline}</p>
          </div>
        </div>
      </Container>

      {/* ---------- INTRO SECTION ---------- */}
      <section className="projects-card-section">
        <Container>
          <div className="projects-intro">
            <h2 className="text-uppercase">{hero.heading}</h2>
            <p className="projects-intro-text">{hero.description}</p>
          </div>
          <hr className="pulse-line" />
        </Container>
              {/* ---------- PROJECTS DISPLAY ---------- */}
      <section className="project-display-section">
        <Container fluid>
          {projects.map((project, idx) => {
            const image = getImage(idx);
            const projectNumber = idx + 1;
            return (
              <div key={idx} className="project-card-hover mb-5">
                <div className="project-image-wrapper">
                  <img
                    src={image}
                    alt={`Project ${projectNumber}`}
                    className="project-image"
                  />
                  <div className="experience-ribbon-flat">
                    <span className="ribbon-desktop">
                      Project No {projectNumber}
                    </span>
                    <span className="ribbon-mobile">{project.shortTitle}</span>
                  </div>
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <h3 className="overlay-title">{project.title}</h3>
                      <p className="project-description-paragraph">
                        {project.description}
                      </p>
                      <h4 className="tools-heading">{project.toolsHeading}</h4>
                      <div className="project-tools">
                        {project.tools.map((tool, i) => (
                          <span key={i} className="tool-badge">
                            {toolIcons[tool.name] || Placeholder}
                            <span className="tool-name">{tool.name}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Container>
      </section>
      </section>


    </>
  );
};

export default Projects;