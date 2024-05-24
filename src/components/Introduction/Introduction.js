import React, { useEffect, useState } from "react";
import introduction from "@/data/introduction";

import { Col, Container, Image, Row } from "react-bootstrap";
import axios from "axios";




// const baseURL = process.env.WP_BASEURL

const Introduction = () => {

  const [data, setData] = useState([])
  // console.log(process.env.NEXT_PUBLIC_BASEURL);

  console.log(data);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/posts`)
      .then((response) => {
        setData(response.data); // Store the data in state
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        // Handle errors if needed
      });
  }, []);




  return (
    <section className="introduction">
      <Container>
        <Row>
          <Col xl={6} lg={6}>

           


            <div className="introduction__left">
              {data &&
                data.map((post, index) => {
                  if (post.id === 421) {
                    return (
                      <>
                        <div className="introduction__img" >
                          <p style={{ fontSize: "1.25rem", fontFamily: "serif", height: "431px", width: "570px" }} dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>

                        </div>
                        <div className="introduction__content">
                          <p className="introduction__text">
                            {post.title.rendered}
                          </p>
                        </div>
                      </>
                    )
                  }
                })
              }

            </div>
          </Col>
          <Col xl={6} lg={6}>
           

            <div className="introduction__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">About SVMM</span>
                <h2 className="section-title__title">
                  {/* Serving the humanity is equivalent to serving God */}
                  May all be healthy
                </h2>
              </div>
              {data &&
                data.map((post, index) => {
                  if (post.id === 216) {
                    return (
                      <>
                        <p className="introduction__right-text" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                      </>

                    )
                  }
                })
              }
              <ul className="introduction__icon-wrap list-unstyled">
                {introduction.map(({ id, title, description, icon }) => (
                  <li className="introduction__icon-wrap-single" key={id}>
                    <div className="introduction__icon-box">
                      <span className={icon}></span>
                    </div>
                    <div className="introduction__content-box">
                      <h2>{title}</h2>
                      <p>{description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a href="#" className="introduction__btn thm-btn">
                <i className="fas fa-arrow-circle-right"></i>Read More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Introduction;
