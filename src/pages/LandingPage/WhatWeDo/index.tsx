import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Banner from "../../../components/Banner";
import Button from "../../../components/Button";
// import Card from "../../../components/Card";
import IconCard from "../../../components/IconCard";
import UserProfile from "../../../components/UserProfile/index";
import ContentSwitch from "../../../components/ContentSwitch";
// import demoImg from "../../../icons/image.png";
import tiempoIcon from "../../../icons/tiempo.png";
import costosIcon from "../../../icons/costos.png";
import accesibilidadIcon from "../../../icons/accesibilidad.png";
import microscopioIcon from "../../../icons/microscopio.png";
// import kuviaNetImg from "../../../icons/computer-kuvia-red.png";
import andreProfileImg from "../../../images/andre-profile.jpg";
import oliProfileImg from "../../../images/oli-profile.png";
import anaProfileImg from "../../../images/ana-profile.jpg";
import martinaProfileImg from "../../../images/martina-profile.jpg";
import background from "../../../images/8bdcd33d1e3faa0a0a26b63cc70e594ac8f472b0.png";
import "./index.scss";

interface ImportanceContent2Item {
  icon: string;
  text: string;
  width: string;
  height: string;
}

interface UserProfile {
  userImg: string;
  userName: string;
  userDescription: string;
  userProfileLink: string;
}

const WhatWeDo: React.FC = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  const scaleTryDemoButton = useTransform(scrollY, [0, 480, 500], [0, 0, 1]);

  // const xBanner1 = useTransform(scrollY, [100, 500], [-500, 0]);
  // const opacityBanner1 = useTransform(scrollY, [100, 500], [0, 1]);

  // const opacityCardGroup = useTransform(scrollY, [100, 500], [0, 1]);
  // const yCardGroup = useTransform(scrollY, [100, 500], [100, 0]);

  const xBanner2 = useTransform(scrollY, [600, 1000], [-500, 0]);
  const opacityBanner2 = useTransform(scrollY, [600, 1000], [0, 1]);

  const opacityWorkFlow = useTransform(scrollY, [600, 1000], [0, 1]);
  const yWorkFlow = useTransform(scrollY, [600, 950], [300, 0]);

  const scaleLearnMoreButton = useTransform(
    scrollY,
    [0, 1050, 1060],
    [0, 0, 1]
  );

  const xBanner3 = useTransform(scrollY, [1200, 1400], [-500, 0]);
  const opacityBanner3 = useTransform(scrollY, [1200, 1400], [0, 1]);

  const opacityIconCardGroup = useTransform(scrollY, [1200, 1400], [0, 1]);
  const yIconCardGroup = useTransform(scrollY, [1200, 1400], [100, 0]);

  const xBanner4 = useTransform(scrollY, [1600, 2000], [-500, 0]);
  const opacityBanner4 = useTransform(scrollY, [1600, 2000], [0, 1]);

  const opacityUsersProfilesGroup = useTransform(scrollY, [1600, 2000], [0, 1]);
  const yUsersProfilesGroup = useTransform(scrollY, [1600, 2000], [100, 0]);

  // const importanceContent1: React.ReactNode[] = [
  //   <p>
  //     <b>Colorectal cancer</b> is the <b>third</b> most common type of cancer
  //     and the <b>second</b> leading cause of cancer-related deaths
  //   </p>,
  //   <p>
  //     <b>Microsatellite Instability (MSI)</b>, is a <b>genetic marker</b> that
  //     indicates defects in the DNA repair process
  //   </p>,
  //   <p>
  //     Patients with <b>MSI</b> are more likely to respond to{" "}
  //     <b>immunotherapy</b> showing a <b>better prognosis</b> than conventional
  //     treatments
  //   </p>,
  // ];

  const importanceContent2: ImportanceContent2Item[] = [
    {
      icon: tiempoIcon,
      text: "Reduce time to diagnosis",
      width: "142px",
      height: "132px",
    },
    {
      icon: costosIcon,
      text: "Reduce costs",
      width: "142px",
      height: "126px",
    },
    {
      icon: accesibilidadIcon,
      text: "Improve accessibility",
      width: "132px",
      height: "132px",
    },
    {
      icon: microscopioIcon,
      text: "Assist in decision-making",
      width: "142px",
      height: "142px",
    },
  ];

  const usersProfiles: UserProfile[] = [
    {
      userImg: andreProfileImg,
      userName: "Andrea Erbetti",
      userDescription: "Business Technology Consultant",
      userProfileLink: "https://www.linkedin.com/in/andrea-erbetti-856165248/",
    },
    {
      userImg: oliProfileImg,
      userName: "Olivia Sanguinetti",
      userDescription: "AI Specialist",
      userProfileLink: "https://www.linkedin.com/in/oliviasanguinetti/",
    },
    {
      userImg: martinaProfileImg,
      userName: "Martina Belluomini",
      userDescription: "Bioengineer",
      userProfileLink: "https://www.linkedin.com/in/martina-belluomini-1b7708240/",
    },
    {
      userImg: anaProfileImg,
      userName: "Ana Gorodisch",
      userDescription: "Data Science Specialist",
      userProfileLink: "https://www.linkedin.com/in/anagorodisch/",
    }
  ];

  const items = [
    {
      title: "Why does biomarker detection matter?",
      description: <p>When a patient is diagnosed with cancer, identifying specific biological markers in the tumor allows doctors to categorize the disease more precisely and match patients with the most effective, targeted treatments. This step, known as biomarker detection, is essential, as patients can benefit from therapies that can significantly increase their chances of survival.</p>,
    },
    {
      title: "What are the challenges in current biomarker detection?",
      description: <p>Current testing methods are <b>slow</b>, <b>costly</b>, and out of reach for many clinics due to the need for specialized infrastructure, resulting in <b>low accessibility</b>, especially in underserved regions.</p>,
    },
    {
      title: "What are the effects of limited access?",
      description: <p><b>Delayed diagnostics. Suboptimal treatments. Avoidable outcomes.</b><br/><br/> Without timely access to biomarker testing, patients are frequently placed on standard treatments that may not align with their tumor’s biology. This one-size-fits-all approach reduces the likelihood of treatment success and can ultimately impact survival.</p>,
    }
  ];

  return (  
    <div className="kuvia-what-we-do-content">
      <div className="kuvia-page-more-demo-button">
        <Button
          text={"Try Demo"}
          onClick={() => navigate("/processing")}
          style={{ margin: "20px 20px 0 auto" }}
          motionStyle={{ scale: scaleTryDemoButton }}
        />
      </div>
      {/* <motion.div style={{ x: xBanner1, opacity: opacityBanner1 }}>
        <Banner text="WHY IS THIS IMPORTANT?" />
      </motion.div> */}
      {/* <motion.div
        className="kuvia-card-group"
        style={{ y: yCardGroup, opacity: opacityCardGroup }}
      >
        {importanceContent1.map((content, index) => (
          <Card
            key={index}
            content={content}
            width={"300px"}
            height={"219px"}
          />
        ))}
      </motion.div> */}
      <div className="kuvia-what-we-do-container">
        <div className="kuvia-what-we-do-title">
          What we do
        </div>
        <div className="kuvia-what-we-do-content">
          <p>
            At Kuvia, our mission is to harness the power of <br />
            artificial intelligence (AI) to transform cancer <br />
            diagnostics, <b>enabling faster and accessible</b><br />
            <b>biomarker detection</b> for better patient outcomes.
          </p>
          <Button type="disabled" text="Demo Coming soon" rounded style={{ padding: "10px 30px" }} />
        </div>
      </div>
      <div className="kuvia-what-we-do-content-switch-container">
        <img src={background} alt="background" className="kuvia-what-we-do-content-switch-background" />
        <ContentSwitch items={items} style={{ marginLeft: "120px" }} />
      </div>
      {/* <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
        <div className="k1">
          <div className="k2">Why does biomarker detection matter?</div>
          <div className="k3"></div>
        </div>
        <div className="k1">
          <div className="k2">What are the challenges in current biomarker detection?</div>
          <div className="k3"></div>
        </div>
        <div className="k1">
          <div className="k2">What are the effects of limited access?</div>
          <div className="k3"></div>
        </div>
      </div> */}
      {/* <motion.div style={{ x: xBanner2, opacity: opacityBanner2 }}>
        <Banner text="HOW DO WE WORK?" />
      </motion.div>
      <motion.div
        className="kuvia-workflow-diagram"
        style={{ y: yWorkFlow, opacity: opacityWorkFlow }}
      >
        <img className="kuvia-demo-image" src={demoImg} alt="demo-colon" />
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
        <div className="kuvia-demo-computer-image-container">
          <img className="kuvia-demo-computer-image" src={kuviaNetImg} alt="PC" />
          <motion.div style={{ y: yWorkFlow, opacity: opacityWorkFlow }} className="kuvia-achievement-card">
            <Card
              key={"kuvia-achievement-card"}
              content={
                <p>
                  Achieving <b>90% accuracy</b>
                </p>
              }
              width="250px"
              height="55px"
            />
          </motion.div>
        </div>
        <div className="kuvia-workflow-image-output-arrows">
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
        </div>
        <div className="kuvia-workflow-image-output-results">
          <Card key={"msi-positive"} content={<b>MSI POSITIVE</b>} width="170px" height="80px" />
          <Card key={"msi-negative"} content={<b>MSI NEGATIVE</b>} width="170px" height="80px" />
        </div>
      </motion.div>
      <div className="kuvia-workflow-diagram-footer">
        <a
          href="https://ascopubs.org/doi/10.1200/JCO.2024.42.16_suppl.11152"
          target="_blank"
          rel="noreferrer"
          style={{ scale: scaleLearnMoreButton }}
        >
          <Button
            text={"Learn more in our abstract presented in ASCO Meeting 2024!"}
            motionStyle={{ scale: scaleLearnMoreButton }}
            className="asco-external-button"
          />
        </a>
      </div> */}
      {/* <motion.div style={{ x: xBanner3, opacity: opacityBanner3 }}>
        <Banner text="WHY ARE WE IMPORTANT?" />
      </motion.div>
      <motion.div
        className="kuvia-icon-card-group"
        style={{ y: yIconCardGroup, opacity: opacityIconCardGroup }}
      >
        {importanceContent2.map((content) => (
          <IconCard
            key={content.text}
            icon={content.icon}
            text={content.text}
            iconWidth={content.width}
            iconHeight={content.height}
          />
        ))}
      </motion.div>
      <motion.div style={{ x: xBanner4, opacity: opacityBanner4 }}>
        <Banner text="ABOUT US" />
      </motion.div>
      <motion.div
        className="kuvia-user-profile-group"
        style={{ y: yUsersProfilesGroup, opacity: opacityUsersProfilesGroup }}
      >
        {usersProfiles.map((profile) => (
          <UserProfile
            key={profile.userName}
            profileImage={profile.userImg}
            profileTitle={profile.userName}
            profileDescription={profile.userDescription}
            profileLink={profile.userProfileLink}
          />
        ))}
      </motion.div> */}
    </div>
  );
};

export default WhatWeDo;
