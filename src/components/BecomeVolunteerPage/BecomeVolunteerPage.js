import becomeVolunteerList from "@/data/becomeVolunteerList";
import image from "@/images/resources/become-a-volunteer.jpg";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import VolunteerForm from "./VolunteerForm";

const BecomeVolunteerPage = () => {
  return (
    <section className="become-volunteer-page">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Register Now</span>
          <h2 className="section-title__title">
            Let’s join our community to <br /> become a volunteer
          </h2>
        </div>
        <Row>
          <Col xl={6} lg={6}>
            <div className="become-volunteer-page__left">
              {/* <div className="become-volunteer-page__img">
                <Image src={image.src} alt="" />
              </div> */}
              <h3 className="become-volunteer-page__title">Requirements</h3>
              {/* <p className="become-volunteer-page__text">
              Join our team of dedicated volunteers and be a part of something meaningful! At SVMM, we rely on the support and passion of volunteers like you to drive positive change in our community. Whether you're interested in environmental conservation, social justice, education, or healthcare, there are numerous ways you can contribute your time and skills to make a difference.
              </p> */}
              <ul className="become-volunteer-page__list list-unstyled">
                {becomeVolunteerList.map((item, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fas fa-arrow-circle-right"></i>
                    </div>
                    <div className="text">
                      <p>{item}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="become-volunteer-page__phone">
                <div className="become-volunteer-page__phone-icon">
                  <span className="icon-chat"></span>
                </div>
                <div className="become-volunteer-page__phone-text">
                  <p>Call Anytime</p>
                  <a href="tel:+91 8281236371">+91 8281236371</a>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="become-volunteer-page__right">
              <VolunteerForm />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeVolunteerPage;
