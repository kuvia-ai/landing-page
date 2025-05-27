import { useScale } from "../../../context/AppContext";
import background from "../../../images/6012c80a2e35a4a3dd4a0954cfdbb5309736ff59.png";
import "./index.scss";

const WhyKuvia: React.FC = () => {
  const { scaleRatio } = useScale();

  return (
    <div className="kuvia-why-kuvia">
      <div className="kuvia-why-kuvia-container">
        <div className="kuvia-why-kuvia-title">Why Kuvia?</div>
        <div className="kuvia-why-kuvia-description">
          <p>Kuvia is helping lead a new wave of healthtech innovation, using AI to detect biomarkers directly from digitized tissue images <span style={{ color: "var(--quaternary-color)", fontWeight: "bold" }}>in just 5 seconds</span>. While designed for scalability worldwide, Kuvia is actively driving this transformation in Latin America, making precision medicine <b>faster</b> and more <b>accessible</b></p>
        </div>
      </div>
      <div className="kuvia-why-kuvia-content">
        <img src={background} alt="background" className="kuvia-why-kuvia-content-background" />
        <div className="kuvia-why-kuvia-content-item" style={{ top: `${230 * scaleRatio}px`, left: `-${146 * scaleRatio}px` }}>Enhances accessibility</div>
        <div className="kuvia-why-kuvia-content-item" style={{ top: `${50 * scaleRatio}px`, left: `-${75 * scaleRatio}px` }}>Reduces time to diagnosis</div>
        <div className="kuvia-why-kuvia-content-item" style={{ top: `${20 * scaleRatio}px`, right: `${65 * scaleRatio}px` }}>Reduces costs</div>
        <div className="kuvia-why-kuvia-content-item" style={{ bottom: `${80 * scaleRatio}px`, right: `-${220 * scaleRatio}px` }}>Empowers clinical decision-making</div>
      </div>
    </div>
  );
};

export default WhyKuvia;
