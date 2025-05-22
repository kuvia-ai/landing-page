import React from "react";
import Button from "../../../components/Button";
import ContentSwitch from "../../../components/ContentSwitch";
import background from "../../../images/8bdcd33d1e3faa0a0a26b63cc70e594ac8f472b0.png";
import "./index.scss";

const WhatWeDo: React.FC = () => {
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
    </div>
  );
};

export default WhatWeDo;
