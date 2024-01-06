import { Container, Row, Col } from "react-bootstrap";
import git_icon from "../assets/images/git-icon.png";
import linkedl_icon from "../assets/images/linkedl-icon.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center">
            <p>CopyRight 2023.</p>
            <div className="social-icon">
              <a href="https://github.com/brianadams68">
                <img src={git_icon} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/brian-adams-549019190/">
                <img src={linkedl_icon} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
