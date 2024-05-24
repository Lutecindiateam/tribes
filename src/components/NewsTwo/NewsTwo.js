import newsTwo from "@/data/newsTwo";
// import bg from "@/images/backgrounds/news-two-bg.jpg";
import dynamic from "next/dynamic";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleNews from "./SingleNews";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const NewsTwo = () => {
  return (
    <section className="news-two">
      <Jarallax className="news-two-bg" speed={0.2} imgPosition="50% 0%">
        <div className="news-two-bg-overlay"></div>
      </Jarallax>
      <Container>
        <div className="section-title text-center">
          <h2 className="section-title__title">
            Latest news 
          </h2>
        </div>
        <Row>
          {newsTwo.map((news) => (
            <SingleNews key={news.id} news={news} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewsTwo;
