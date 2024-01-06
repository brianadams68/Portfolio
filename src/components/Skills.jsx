import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import htmlIcon from "../assets/images/html-icon.png";
import cssIcon from "../assets/images/css-icon.png";
import reactIcon from "../assets/images/react-icon.png";
import mongoIcon from "../assets/images/mongodb-icon.png";
import jsIcon from "../assets/images/javascript-icon.png";
import nodeIcon from "../assets/images/nodejs-icon.png";
import tsIcon from "../assets/images/ts-icon.png"
import pythonIcon from "../assets/images/python-icon.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>
                These are some of the skills I learned in programming that have
                not only enhanced my technical abilities but also enriched my
                overall approach to problem-solving and innovation. These skills
                serve as the building blocks of my programming journey, enabling
                me to create efficient and effective solutions while continually
                expanding my knowledge and expertise.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <h5>HTML</h5>
                  <img src={htmlIcon} alt="" />
                </div>
                <div className="item">
                  <h5>CSS</h5>
                  <img src={cssIcon} alt="" />
                </div>
                <div className="item">
                  <h5>Javascript</h5>
                  <img src={jsIcon} alt="" />
                </div>
                <div className="item">
                  <h5>React</h5>
                  <img src={reactIcon} alt="" />
                </div>
                <div className="item">
                  <h5>MongoDB</h5>
                  <img src={mongoIcon} alt="" />
                </div>
                <div className="item">
                  <h5>NodeJS</h5>
                  <img src={nodeIcon} alt="" />
                </div>
                <div className="item">
                  <h5>TypeScript</h5>
                  <img src={tsIcon} alt="" />
                </div>
                <div className="item">
                  <h5>Python</h5>
                  <img src={pythonIcon} alt="" />
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src="" alt="" />
    </section>
  );
};
