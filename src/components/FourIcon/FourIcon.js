

import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import dynamic from "next/dynamic"; // Import dynamic from "next/dynamic"
import fourIcons from "@/data/fourIcons"; // Import your data
const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false }); // Import TinySlider dynamically

const FourIcon = () => {
  // Define settings for TinySlider
  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    items: 1,
    autoplay: true,
    autoHeight: true,
    gutter: 0,
    responsive: {
      768: {
        items: 2,
        gutter: 20,
      },
      992: {
        items: 3,
        gutter: 30,
      },
      1200: { // Add a new breakpoint for four columns
        items: 4,
        gutter: 40,
      },
    },
    controls: false, // Remove default navigation buttons
  };

  return (
    <section className="four-icon">
      <Container>
        <Row className="justify-content-center">
          {/* Use TinySlider component */}
          <TinySlider settings={settings}>
            {/* Map through the fourIcons data */}
            {fourIcons.map(({ id, title, icon, description, image }) => (
              <Col
                xl={3} // Set column size to 3 for extra-large screens (4 columns)
                lg={3}
                md={4} // Adjust column size for medium screens
                sm={6} // Adjust column size for small screens
                xs={6}
                className="fadeInUp"
                key={id}
              >
                <div className="four-icon__single">
                  <div className="four-icon__img">
                    <Image
                      src={require(`@/images/resources/${image}`).default.src}
                      alt=""
                    />
                    <div className="four-icon__content-box">
                      <h3 className="four-icon__title">{title}</h3>
                      <p className="four-icon__text">{description}</p>
                    </div>
                  </div>
                  <div className="four-icon__bottom-icon">
                    <span className={icon}></span>
                  </div>
                </div>
              </Col>
            ))}
          </TinySlider>
        </Row>
        {/* Custom navigation buttons */}
        <div className="custom-nav">
          <button className="custom-nav__prev">
            <i className="fas fa-arrow-left"></i> 
          </button>
          <button className="custom-nav__next">
            <i className="fas fa-arrow-right"></i> 
          </button>
        </div>
      </Container>
      <style jsx>{`
        .custom-nav {
         
          display: flex;
          justify-content: flex-end;
          margin-top: 5px; 
        }
        .custom-nav button {
          background-color: #fff; 
          border: 0;
          border-radius: 50%; 
          padding: 20px; 
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .custom-nav button:hover {
          background-color: orange; 
        }
      `}</style>
    </section>
  );
};

export default FourIcon;
