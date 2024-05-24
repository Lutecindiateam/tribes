import bg from "@/images/resources/three-boxes-img-1.jpg";
import React from "react";
import { Col } from "react-bootstrap";

const SingleBox = ({ singleBox }) => {
  const { icon, title, className } = singleBox;

  return (
    <Col xl={4}>
      <div className={`three-boxes__single ${className}`}>
        <div
          className="three-boxes__single-bg"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <div className="three-boxes__content">
          <div className="three-boxes__icon">
            <span className={icon}></span>
          </div>
          <div className="three-boxes__text-box">
            <h2>{title}</h2>
            <p className="three-boxes__text">
              Lorem ipsum is simply free text available amet, consectetuer
              adipiscing elit. There are not many passages of ipsum.
            </p>
            <a href="#" className="three-boxes__btn">
              <i className="fa fa-heart"></i>Donate{" "}
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleBox;
