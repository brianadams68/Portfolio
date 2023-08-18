import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";
import colorSharp2 from "../assets/images/banner-bg.jpg"
import projImg1 from "../assets/images/projImg1.png"
import projImg2 from "../assets/images/projImg2.png"
import projImg3 from "../assets/images/projImg3.png"

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
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first"> Tab 1 </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second"> Tab 2 </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third"> Tab 3 </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      <ProjectsCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
