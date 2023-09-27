import React from "react";
import { Col } from "react-bootstrap";

export const ProjectsCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col  sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={link}><span>{link}</span></a>
        </div>
      </div>
    </Col>
  );
};
