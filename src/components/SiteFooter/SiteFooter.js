import footerData from "@/data/footerData";
import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const {
  exploreList,
  social,
  email,
  tel,
  officeAddress,
  about,
  link,
  copyrightYear,
  bottomLogo,
  footerBg,
} = footerData;

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div
        className="site-footer-bg"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>
      <Container>
        <div className="site-footer__top">
          <Row>
            <Col xl={3} lg={6} md={6} className="fadeInUp">
              <div className="footer-widget__column footer-widget__about">
                <h3 className="footer-widget__title">About SVMM</h3>
                <p className="footer-widget__text">{about}</p>
                <a href="/causes-details" className="footer-widget__about-btn">
                  Donate
                </a>
              </div>
            </Col>
            <Col
              xl={3}
              lg={6}
              md={6}
              className="wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="footer-widget__column footer-widget__explore clearfix">
                <h3 className="footer-widget__title">Programs</h3>
                <ul className="footer-widget__explore-list list-unstyled">
                  {exploreList.slice(0, 5).map(({ id, title, href }) => (
                    <li key={id}>
                      <a href={href}>{title}</a>
                    </li>
                  ))}
                </ul>
         
                <ul className="footer-widget__explore-list footer-widget__explore-list-two list-unstyled">
                  {exploreList.slice(5).map(({ id, title, href }) => (
                    <li key={id}>
                      <a href={href}>{title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col
              xl={3}
              lg={6}
              md={6}
              className="wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="footer-widget__column footer-widget__newsletter">
                <h3 className="footer-widget__title">Quick Links</h3>
                
                <p className="footer-widget__newsletter-text">
                <a href="/about">About Us</a>
                </p>
                <p className="footer-widget__newsletter-text">
                <a href="/terms">Terms and Condition </a>
                </p>
                <p className="footer-widget__newsletter-text">
                <a href="/refund">Refund Policy</a>
                </p>
                <p className="footer-widget__newsletter-text">
                <a href="/policy">Privacy Policy</a>
                </p>
                <p className="footer-widget__newsletter-text">
                <a href="/contact">Contact Us</a>
                </p>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} className="fadeInUp">
              <div className="footer-widget__column footer-widget__contact">
                <h3 className="footer-widget__title">Contact</h3>
                <ul className="list-unstyled footer-widget__contact-list">
                  <li>
                    <div className="icon">
                      <i className="icon-chat"></i>
                    </div>
                    <div className="text">
                      <p>
                        <span>Call Anytime</span>
                        <a href={`tel:${tel}`}>{tel}</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-message"></i>
                    </div>
                    <div className="text">
                      <p>
                        <span>Send Email</span>
                        <a href={`mailto:${email}`}>{email}</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-address"></i>
                    </div>
                    <div className="text">
                      <p>
                        <span>Address</span>
                       {/* <link src="https://www.google.com/maps/place/Swami+Vivekananda+Medical+Mission+Hospital/@11.6371806,76.1080711,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba60c9fa44a948b:0xf33a04503c1ef5fd!8m2!3d11.6371806!4d76.110646!16s%2Fg%2F1tdr1r3y?entry=ttu"></link> */}
                       <a href="https://www.google.com/maps/place/Swami+Vivekananda+Medical+Mission+Hospital/@11.6371806,76.1080711,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba60c9fa44a948b:0xf33a04503c1ef5fd!8m2!3d11.6371806!4d76.110646!16s%2Fg%2F1tdr1r3y?entry=ttu"> {officeAddress}</a>
                     <br />
Vivekananda Nagar, Muttil, PO-Kalpetta North 
Dist.-WAYANAD, KERALA- 673122. 
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
           
            
          </Row>
        </div>
        <div className="site-footer__bottom">
          <Row>
            <Col xl={12}>
              <div className="site-footer__bottom-inner">
                <div className="site-footer__bottom-logo-social">
                  <div className="site-footer__bottom-logo">
                    <Link href="/">

                      <Image src={bottomLogo} alt="" />

                    </Link>
                  </div>
                  {/* <div className="site-footer__bottom-social">
                    {social.map(({ id, icon, href }) => (
                      <a href={href} key={id}>
                        <i className={`fab ${icon}`}></i>
                      </a>
                    ))}
                  </div> */}
                </div>
                <div className="site-footer__bottom-copy-right">
                  <p>
                    © Copyright {copyrightYear} by{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`${'https://www.bharat-online.com/'}`}
                    >
                      {link}
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default SiteFooter;
