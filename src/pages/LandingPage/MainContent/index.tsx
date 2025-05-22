import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, HTMLMotionProps } from "framer-motion";
import background from './background.mp4'
import computadora from "../../../icons/COMPUTADORA-02.png";
import Header from "./Header";
import "./index.scss";

type MotionDivProps = HTMLMotionProps<"div"> & {
  className?: string;
};

const MotionDiv = motion.div as React.FC<MotionDivProps>;

const MainContent: React.FC = () => {
  const navigate = useNavigate();

  const { scrollY } = useScroll();

  const yMainLandingContent = useTransform(scrollY, [0, 500], [0, -700]);
  const opacityMainLandingContent = useTransform(scrollY, [0, 500], [1, 0]);

  const opacityReadMore = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="kuvia-landing-page-main-content-container">
      <video autoPlay loop muted id='kuvia-landing-page-main-content-video'>
        <source src={background} type="video/mp4" />
      </video>
      <MotionDiv
        className="kuvia-landing-page-main-content"
        style={{ y: yMainLandingContent, opacity: opacityMainLandingContent }}
      >
        <Header />
        <div className="kuvia-landing-body">
          <div className="kuvia-landing-body-content">
            <h2>
              Redefining diagnostics,<br /> unlocking precision<br /> medicine with AI
            </h2>
          </div>
        </div>
        <MotionDiv
          className="kuvia-landing-read-more"
          style={{ opacity: opacityReadMore }}
        >
          <p>¡Read More!</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 512 299.283"
          >
            <path d="M75.334 12.591C10.57-24.337-20.852 28.186 15.131 64.566l200.866 209.613c33.472 33.471 46.534 33.471 80.006 0L496.869 64.566c35.983-36.38 4.561-88.903-60.203-51.975L256 109.944 75.334 12.591z" />
          </svg>
        </MotionDiv>
      </MotionDiv>
    </div>
  );
};

export default MainContent;
