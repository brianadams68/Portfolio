import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";
import projImg1 from "../assets/images/projImg1.png";
import projImg2 from "../assets/images/projImg2.png";
import projImg3 from "../assets/images/projImg3.png";
import projImg4 from "../assets/images/calculator.png";
import projImg5 from "../assets/images/quiz.png";
import projImg6 from "../assets/images/hangman.png";
import projImg7 from "../assets/images/weather.png";
import projImg8 from "../assets/images/tic-tac-toe.png";
import projImg9 from "../assets/images/projImg9.png";
import projImg10 from "../assets/images/projImg10.png";
import projImg11 from "../assets/images/projImg11.png";
import "bootstrap/dist/css/bootstrap.min.css";

export const Projects = () => {
  const projects = [
    {
      title: "The Savior",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://brianadams68.github.io/The-Saviors/",
    },
    {
      title: "Trackify",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://habit-tracker.adaptable.app/",
    },
    {
      title: "SportSoul",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://fanciful-mooncake-5f4f8c.netlify.app/",
    },
    {
      title: "Recipe Finder",
      description: "Design & Development",
      imgUrl: projImg9,
      link: "",
    },
    {
      title: "Currency Converter",
      description: "Design & Development",
      imgUrl: projImg11,
      link: "",
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "Design & Development",
      imgUrl: projImg8,
      link: "https://maino-tic-tac-toe.netlify.app/",
    },
    {
      title: "Weather App",
      description: "Design & Development",
      imgUrl: projImg7,
      link: "https://maino-weather.netlify.app/",
    },
    {
      title: "Password Generator",
      description: "Design & Development",
      imgUrl: projImg10,
      link: "https://maino-password.netlify.app/",
    },
    {
      title: "Calculator",
      description: "Design & Development",
      imgUrl: projImg4,
      link: "https://maino-calculator.netlify.app/",
    },
    {
      title: "Quiz",
      description: "Design & Development",
      imgUrl: projImg5,
      link: "https://maino-quiz.netlify.app/",
    },
    {
      title: "Hangman",
      description: "Design & Development",
      imgUrl: projImg6,
      link: "https://maino-hangman.netlify.app/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              These projects encapsulate my course journey, showcasing my
              evolving skills and problem-solving prowess. They stand as proof
              of my ability to translate knowledge into tangible creations and
              highlight my growth as a programmer. As I move forward, these
              projects will serve as a foundation for my future endeavors in the
              dynamic realm of technology.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Row className="mobile-pills">
                <Col>
                  <Nav variant="pills" className="nav-pills" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Course Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project Ideas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">100 days of code</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col>
                  <Tab.Content id="pills-projects">
                    <Tab.Pane eventKey="first">
                      <div style={{ display: "flex", flexWrap: "nowrap" }}>
                        {projects.slice(0, 3).map((project, index) => (
                          <ProjectsCard key={index} {...project} />
                        ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div style={{ display: "flex", flexWrap: "nowrap" }}>
                        {projects.slice(3, 5).map((project, index) => (
                          <ProjectsCard key={index} {...project} />
                        ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div style={{ display: "flex", flexWrap: "nowrap" }}>
                        {projects.slice(5, 8).map((project, index) => (
                          <ProjectsCard key={index} {...project} />
                        ))}
                      </div>
                      <div style={{ display: "flex", flexWrap: "nowrap" }}>
                        {projects.slice(8, 11).map((project, index) => (
                          <ProjectsCard key={index} {...project} />
                        ))}
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
