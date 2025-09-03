import React, { useState } from 'react';
import { useScale } from '../../../context/AppContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import background from '../../../assets/background.mp4';
import compressedBackground from '../../../assets/background.webm';
import videoPoster from '../../../assets/images/mainPageVideoPoster.png';
import Header from './Header';
import './index.scss';

const MainContent: React.FC = () => {
  const [isVideoPaused, setIsVideoPaused] = useState(false);

  const { scrollY } = useScroll();
  const { scaleRatio } = useScale();

  const yMainLandingContent = useTransform(
    scrollY,
    [300 * scaleRatio, 700 * scaleRatio],
    [0, -700]
  );
  const opacityMainLandingContent = useTransform(
    scrollY,
    [400 * scaleRatio, 500 * scaleRatio],
    [1, 0]
  );

  const opacityReadMore = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="kuvia-landing-page-main-content-container">
      <video
        autoPlay
        loop
        muted
        id="kuvia-landing-page-main-content-video"
        playsInline
        preload="auto"
        poster={videoPoster}
        onLoadedData={(e) => {
          const video = e.currentTarget;
          video.play().catch((error) => {
            console.log('Autoplay failed:', error);
          });
        }}
      >
        <source src={compressedBackground} type="video/webm" />
        <source src={background} type="video/mp4" />
      </video>
      <motion.div
        className="kuvia-landing-page-main-content"
        style={{ y: yMainLandingContent, opacity: opacityMainLandingContent }}
      >
        <Header />
        <div className="kuvia-landing-body">
          <div className="kuvia-landing-body-content">
            <h2>
              Redefining diagnostics,
              <br /> unlocking precision
              <br /> medicine with AI
            </h2>
          </div>
        </div>
        <motion.div
          className="kuvia-landing-read-more"
          style={{ opacity: opacityReadMore }}
        >
          <p>Read More</p>
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
        </motion.div>
        <motion.button
          className="kuvia-landing-background-pause-button"
          onClick={() => {
            const video = document.getElementById(
              'kuvia-landing-page-main-content-video'
            ) as HTMLVideoElement;
            if (video) {
              if (video.paused) {
                video.play();
                setIsVideoPaused(false);
              } else {
                video.pause();
                setIsVideoPaused(true);
              }
            }
          }}
          style={{ opacity: opacityReadMore }}
        >
          {!isVideoPaused ? (
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>ionicons-v5-c</title>
                <rect
                  x="176"
                  y="96"
                  width="16"
                  height="320"
                  style={{
                    fill: 'none',
                    stroke: '#000000',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '32px',
                  }}
                ></rect>
                <rect
                  x="320"
                  y="96"
                  width="16"
                  height="320"
                  style={{
                    fill: 'none',
                    stroke: '#000000',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '32px',
                  }}
                ></rect>
              </g>
            </svg>
          ) : (
            <svg
              fill="#000000"
              width="18px"
              height="22px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: '-3px' }}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>play</title>
                <path d="M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z"></path>
              </g>
            </svg>
          )}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default MainContent;
