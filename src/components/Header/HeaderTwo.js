import { useRootContext } from "@/context/context";
import navItems, { social } from "@/data/NavItems";
import useScroll from "@/hooks/useScroll";
import logo from "@/images/resources/llogo.png";
import Link from "next/link";
import React from "react";
import { Container, Image } from "react-bootstrap";
import NavItem from "./NavItem";

const HeaderTwo = () => {
  const { scrollTop } = useScroll(130);
  const { toggleMenu, toggleSearch } = useRootContext();

  return (
    <header className="main-header-two clearfix">
      <div className="main-header-two__inner">
        <Container>
          <div className="main-header-two__top clearfix">
            <div className="main-header-two__logo">
              <Link href="/">

                <Image src={logo.src} alt="" style={{height:"120px"}} />

              </Link>
            </div>
        
            <div className="main-header-two__contact-info">
              <ul className="main-header-two__contact-list list-unstyled ">
                <li>
                 <p style={{fontSize:"40px",color:"white"}}>Swami Vivekananda Medical Mission </p>
                 <p style={{fontSize:"40px",color:"white"}}>Wayanad, Kerala</p>
                </li>
                {/* <li>
                  <div className="main-header-two__contact-icon">
                    <span className="icon-message"></span>
                  </div>
                  <div className="main-header-two__contact-text">
                    <p>Send Email</p>
                    <a href="mailto:needhelp@company.com">
                      needhelp@company.com
                    </a>
                  </div>
                </li> */}
                {/* <li>
                  <div className="main-header-two__contact-icon">
                    <span className="icon-address"></span>
                  </div>
                  <div className="main-header-two__contact-text">
                    <p>Visit Office</p>
                    <h5>80 broklyn golden street</h5>
                  </div>
                </li> */}
              </ul>

              {/* <p>Swami Vivekanad Medical Mission Wayanad , Kerala</p> */}
              <div className="main-header-two__btn ">
                <Link href="/causes-details" className="main-header-two__donate-btn">
                  Donate{" "}

                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="main-header-two__bottom">
        <nav
          className={
            scrollTop
              ? "stricky-header stricked-menu main-menu main-menu__two stricky-fixed slideInDown animated"
              : "main-menu main-menu__two slideIn animated"
          }
        >
          <Container>
            <div
              className={
                scrollTop
                  ? "sticky-header__content main-menu__inner clearfix"
                  : "main-menu__inner clearfix"
              }
            >
              <span
                onClick={() => toggleMenu()}
                className="mobile-nav__toggler"
              >
                <i className="fa fa-bars"></i>
              </span>
              <ul className="main-menu__list">
                {navItems.map((navItem) => (
                  <NavItem key={navItem.id} navItem={navItem} />
                ))}
              </ul>
              <div className="main-menu__right">
                {/* <div className="main-menu__right-social">
                  {social.map(({ icon, link }, index) => (
                    <a href={link} key={index}>
                      <i className={`fab ${icon}`}></i>
                    </a>
                  ))}
                </div> */}
                <span
                  onClick={toggleSearch}
                  style={{ cursor: "pointer" }}
                  className="main-menu__search search-toggler icon-magnifying-glass"
                ></span>
                {/* <a
                  href="#"
                  className="main-menu__cart icon-shopping-cart  "
                ></a> */}
              </div>
            </div>
          </Container>
        </nav>
      </div>
    </header>
  );
};

export default HeaderTwo;
