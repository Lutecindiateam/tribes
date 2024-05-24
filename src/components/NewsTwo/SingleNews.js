
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleNews = ({ news = {} }) => {
  const { id, image, date, title, description, author, comments } = news;

  return (
    <Col xl={4} lg={4} className="animated fadeInUp">
      <div className="news-two__single">
        <div className="news-two__img-box">
          <div className="news-two__img">
            <Image src={require(`@/images/blog/${image}`).default.src} alt="" />
           
          </div>
          <div className="news-two__date">
            <p>{date}</p>
          </div>
        </div>
        <div className="news-two__content">
          <ul className="list-unstyled news-two__meta">
            
          </ul>
          <h3>
            <p>{title}</p>
          </h3>
          <p className="news-two__text">{description}</p>
        </div>
      </div>
    </Col>
  );
};

export default SingleNews;
