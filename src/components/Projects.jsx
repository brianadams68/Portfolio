import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";
import projImg1 from "../assets/images/projImg1.png";
import projImg2 from "../assets/images/projImg2.png";
import projImg3 from "../assets/images/projImg3.png";

export const Projects = () => {
  const projects = [
    {
      title: "The Savior",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Trackify",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "SportSoul",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur sint nemo, architecto inventore perferendis minus
              eveniet sequi accusamus molestias fugiat non quo amet repellendus
              odit, dicta rem assumenda neque at.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav
                    variant="pills"
                    className="nav-pills mb-5 d-flex justify-content-center"
                    id="pills-tab"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab Second</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab Three</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={5}>
                  <Tab.Content className="pills-projects">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectsCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second"></Tab.Pane>
                    <Tab.Pane eventKey="third"></Tab.Pane>
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
