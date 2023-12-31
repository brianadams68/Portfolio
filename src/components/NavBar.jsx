import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import git_icon from "../assets/images/git-icon.png";
import linkedl_icon from "../assets/images/linkedl-icon.png";
import logo from "../assets/images/logo.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar className={scrolled ? "scrolled" : ""}>
      <Container id="nav-container">
        <Navbar.Brand href="#home">
          <img className="logo-img" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar id="basic-navbar-nav">
          <Nav>
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("project")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/brianadams68">
                <img src={git_icon} alt="Git icon" />
              </a>
              <a href="https://www.linkedin.com/in/brian-adams-549019190/">
                <img src={linkedl_icon} alt="Linkedln icon" />
              </a>
            </div>
          </span>
        </Navbar>
      </Container>
    </Navbar>
  );
};
