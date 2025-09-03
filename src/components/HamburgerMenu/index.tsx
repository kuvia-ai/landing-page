import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { useScroll, useTransform, motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import MobileNav from '../MobileNav';
import './index.scss';

const HamburgerMenu = () => {
  const { isMobile } = useContext(AppContext);
  const [animate, setAnimate] = useState(false);
  const [expandHamburgerMenu, setExpandHamburgerMenu] = useState(false);

  const { scrollY } = useScroll();

  const opacityHamburgerMenu = useTransform(scrollY, [450, 700], [0, 1]);

  const toggleMenu = () => {
    // Trigger animation
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
      setExpandHamburgerMenu(!expandHamburgerMenu);
    }, 10); // small delay to allow class to reset
  };

  useEffect(() => {
    if (expandHamburgerMenu && isMobile) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [expandHamburgerMenu]);

  return (
    <motion.div
      className={`kuvia-hamburger-menu ${isMobile ? 'mobile' : ''}${
        expandHamburgerMenu ? '-expanded' : ''
      } ${!animate ? '' : expandHamburgerMenu ? 'spinLeft' : 'spinRight'}`}
      style={
        !isMobile ? { opacity: opacityHamburgerMenu, position: 'sticky' } : {}
      }
    >
      {!isMobile && (
        <div
          className={`kuvia-hamburger-menu-navbar ${expandHamburgerMenu ? 'expand' : 'collapse'}`}
        >
          <Navbar />
        </div>
      )}
      <div
        className={`kuvia-hamburger-menu-button ${!animate ? '' : expandHamburgerMenu ? 'spinLeft' : 'spinRight'}`}
        onClick={toggleMenu}
      >
        {!expandHamburgerMenu ? (
          <svg
            fill="#000000"
            width="32px"
            height="27px"
            viewBox="0 0 64 64"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              strokeLinejoin: 'round',
              strokeMiterlimit: '2',
            }}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g transform="matrix(1,0,0,1,-1024,-192)">
                <rect
                  id="Icons"
                  x="0"
                  y="0"
                  width="1280"
                  height="800"
                  style={{ fill: 'none' }}
                ></rect>
                <g id="Icons1">
                  <g id="Strike"></g>
                  <g id="H1"></g>
                  <g id="H2"></g>
                  <g id="H3"></g>
                  <g id="list-ul"></g>
                  <g
                    id="hamburger-1"
                    transform="matrix(1.50868,0,0,1.01217,6.67804,191.698)"
                  >
                    <g transform="matrix(0.149202,0,0,0.173437,664.206,42.142)">
                      <rect
                        x="103.288"
                        y="8.535"
                        width="212.447"
                        height="34.133"
                        style={{ fillRule: 'nonzero' }}
                      ></rect>
                    </g>
                    <g transform="matrix(0.149202,0,0,0.173437,664.345,27.4)">
                      <rect
                        x="103.288"
                        y="8.535"
                        width="212.447"
                        height="34.133"
                        style={{ fillRule: 'nonzero' }}
                      ></rect>
                    </g>
                    <g transform="matrix(0.149202,0,0,0.173437,664.345,12.658)">
                      <rect
                        x="103.288"
                        y="8.535"
                        width="212.447"
                        height="34.133"
                        style={{ fillRule: 'nonzero' }}
                      ></rect>
                    </g>
                  </g>
                  <g id="hamburger-2"> </g>
                  <g id="list-ol"> </g>
                  <g id="list-task"> </g>
                  <g id="trash"> </g>
                  <g id="vertical-menu"></g>
                  <g id="horizontal-menu"> </g>
                  <g id="sidebar-2"> </g>
                  <g id="Pen"> </g>
                  <g id="Pen1"></g>
                  <g id="clock"> </g>
                  <g id="external-link"> </g>
                  <g id="hr"> </g>
                  <g id="info"> </g>
                  <g id="warning"> </g>
                  <g id="plus-circle"> </g>
                  <g id="minus-circle"> </g>
                  <g id="vue"> </g>
                  <g id="cog"> </g>
                  <g id="logo"> </g>
                  <g id="radio-check"> </g>
                  <g id="eye-slash"> </g>
                  <g id="eye"> </g>
                  <g id="toggle-off"></g>
                  <g id="shredder"> </g>
                  <g id="spinner--loading--dots-"> </g>
                  <g id="react"> </g>
                  <g id="check-selected"> </g>
                  <g id="turn-off"> </g>
                  <g id="code-block"> </g>
                  <g id="user"> </g>
                  <g id="coffee-bean"> </g>
                  <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,785.021,-208.975)">
                    <g id="coffee-beans">
                      <g id="coffee-bean1"> </g>
                    </g>
                  </g>
                  <g id="coffee-bean-filled"> </g>
                  <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,913.062,-208.975)">
                    <g id="coffee-beans-filled">
                      <g id="coffee-bean2"> </g>
                    </g>
                  </g>
                  <g id="clipboard"> </g>
                  <g transform="matrix(1,0,0,1,128.011,1.35415)">
                    <g id="clipboard-paste"> </g>
                  </g>
                  <g id="clipboard-copy"> </g>
                  <g id="Layer1"> </g>
                </g>
              </g>
            </g>
          </svg>
        ) : (
          <svg
            fill="#000000"
            width="22px"
            height="22px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z"
                fill-rule="evenodd"
              ></path>
            </g>
          </svg>
        )}
      </div>
      {isMobile && expandHamburgerMenu && (
        <MobileNav onLinkClick={() => setExpandHamburgerMenu(false)} />
      )}
    </motion.div>
  );
};

export default HamburgerMenu;
