import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/headerImg.png";
import headerImg2 from "../assets/images/headerImg2.jpeg";
import headerImg3 from "../assets/images/headerImg3.jpeg";
import headerImg4 from "../assets/images/headerImg4.JPG";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState(" ");
  const [toRotate] = useState(["Web Developer"]);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text, toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5} className="text-column">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi, I'm Brian `} <span className="wrap">{text}</span>{" "}
            </h1>
          </Col>
          <Row id="banner-flex">
            <p>
              I am a passionate web development lover with a background in
              logistics and human resources. I bring strong communication,
              problem-solving, and organizational skills to the table. My
              technical expertise includes HTML, CSS3, JavaScript (ES6), React,
              Node.js, Express.js, MongoDB, Mongoose, Git, GitHub, and REST API
              integration.
            </p>
            <Col xs={12} md={6} xl={5} className="gallery">
              <img src={headerImg} alt="" />
              <img src={headerImg2} alt="" />
              <img src={headerImg3} alt="" />
              <img src={headerImg4} alt="" />
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};
