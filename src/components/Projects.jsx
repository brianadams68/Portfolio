import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";
import projImg1 from "../assets/images/projImg1.png";
import projImg2 from "../assets/images/projImg2.png";
import projImg3 from "../assets/images/projImg3.png";
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
                  <Nav
                    variant="pills"
                    className="nav-pills"
                    id="pills-tab"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">First Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Second Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Third Project</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col>
                  <Tab.Content className="pills-projects">
                    <Tab.Pane eventKey="first">
                      <ProjectsCard {...projects[0]} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <ProjectsCard {...projects[1]} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <ProjectsCard {...projects[2]} />
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
