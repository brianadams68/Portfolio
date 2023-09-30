import React from "react";
import { Col } from "react-bootstrap";

export const ProjectsCard = ({ title, description, imgUrl, link }) => {
  const openLinkInNewWindow = () => {
    window.open(link, "_blank");
  };

  return (
    <Col>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p onClick={openLinkInNewWindow}><span>{link}</span></p>
        </div>
      </div>
    </Col>
  );
};
