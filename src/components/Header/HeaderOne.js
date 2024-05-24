import { useRootContext } from "@/context/context";
import navItems, { social } from "@/data/NavItems";
import useScroll from "@/hooks/useScroll";
import logo from "@/images/resources/newlogo15.png";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";

const HeaderOne = () => {
  const { scrollTop } = useScroll(130);
  const { toggleMenu, toggleSearch } = useRootContext();

  return (
    <header className="main-header clearfix">
      <div className="main-header__logo">
        <Link href="/">

          <Image src={logo.src} alt="" />

        </Link>
      </div>
      <div className="main-menu-wrapper">
        <div className="main-menu-wrapper__top">
          <div className="main-menu-wrapper__top-inner">
            <div className="main-menu-wrapper__left">
              <div className="main-menu-wrapper__left-content">
                {/* <div className="main-menu-wrapper__left-text">
                  <p>Welcome to the Charity & Donation Theme</p>
                </div> */}
                <div className="main-menu-wrapper__left-email-box">
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="email">
                    <a href="mailto:contact@svmmkerala.org">
                contact@svmmkerala.org                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-menu-wrapper__right">
              {/* <div className="main-menu-wrapper__right-social">
                {social.map(({ icon, link }, index) => (
                  <a href={link} key={index}>
                    <i className={`fab ${icon}`}></i>
                  </a>
                ))}
              </div> */}
            </div>
          </div>
        </div>
        <div className="main-menu-wrapper__bottom">
          <nav
            className={
              scrollTop
                ? "stricky-header stricked-menu main-menu stricky-fixed slideInDown animated"
                : "main-menu slideIn animated"
            }
          >
            <div
              className={
                scrollTop
                  ? "sticky-header__content main-menu__inner"
                  : "main-menu__inner"
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
                <span
                  onClick={toggleSearch}
                  style={{ cursor: "pointer" }}
                  className="main-menu__search search-toggler icon-magnifying-glass"
                ></span>
                {/* <a href="#" className="main-menu__cart icon-shopping-cart "></a> */}
                <div className="main-menu__phone-contact">
                  <div className="main-menu__phone-icon">
                    <span className="icon-chat"></span>
                  </div>
                  <div className="main-menu__phone-number">
                    <p>Call Anytime</p>
                    <a href="tel:+91 8281236371">+91 8281236371</a>
                  </div>
  </div>
                <Link href="/causes-details" className="main-menu__donate-btn">
                  
                   Donate
                  
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
