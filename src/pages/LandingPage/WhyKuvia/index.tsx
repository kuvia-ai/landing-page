import { useScale } from '../../../context/AppContext';
import background from '../../../images/6012c80a2e35a4a3dd4a0954cfdbb5309736ff59.png';
import './index.scss';

const WhyKuvia: React.FC = () => {
  return (
    <div className="kuvia-why-kuvia">
      <div className="kuvia-why-kuvia-container">
        <div className="kuvia-why-kuvia-title">Why Kuvia?</div>
        <p className="kuvia-why-kuvia-description">
          Kuvia is helping lead a new wave of healthtech innovation, using AI to
          detect biomarkers directly from digitized tissue images{' '}
          <b>in just 5 seconds</b>. While designed for scalability worldwide,
          Kuvia is actively driving this transformation in Latin America, making
          precision medicine <b>faster</b> and more <b>accessible</b>
        </p>
      </div>
      <div className="kuvia-why-kuvia-content">
        <img
          src={background}
          alt="background"
          className="kuvia-why-kuvia-content-background"
        />
        <div
          className="kuvia-why-kuvia-content-item"
          style={{
            top: '175px',
            left: '-90px',
          }}
        >
          Enhances accessibility
        </div>
        <div
          className="kuvia-why-kuvia-content-item"
          style={{ top: '40px', left: '-30px' }}
        >
          Reduces time to diagnosis
        </div>
        <div
          className="kuvia-why-kuvia-content-item"
          style={{ top: '20px', right: '65px' }}
        >
          Reduces costs
        </div>
        <div
          className="kuvia-why-kuvia-content-item"
          style={{
            bottom: '60px',
            right: '-130px',
          }}
        >
          Empowers clinical decision-making
        </div>
      </div>
    </div>
  );
};

export default WhyKuvia;
