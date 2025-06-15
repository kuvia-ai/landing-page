import { useContext } from 'react';
import background from '../../../images/6012c80a2e35a4a3dd4a0954cfdbb5309736ff59.png';
import { AppContext } from '../../../context/AppContext';
import './index.scss';

const WhyKuvia: React.FC = () => {
  const { isMobile } = useContext(AppContext);

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
            top: `${!isMobile ? '175px' : '110px'}`,
            left: `${!isMobile ? '-90px' : '-30px'}`,
          }}
        >
          Enhances accessibility
        </div>
        <div
          className="kuvia-why-kuvia-content-item"
          style={{
            top: `${!isMobile ? '40px' : '30px'}`,
            left: `${!isMobile ? '-30px' : '-15px'}`,
          }}
        >
          Reduces time to diagnosis
        </div>
        <div
          className="kuvia-why-kuvia-content-item"
          style={{
            top: `${!isMobile ? '20px' : '30px'}`,
            right: `${!isMobile ? '65px' : '30px'}`,
          }}
        >
          Reduces costs
        </div>
        <div
          className="kuvia-why-kuvia-content-item"
          style={{
            bottom: `${!isMobile ? '60px' : '17px'}`,
            right: `${!isMobile ? '-130px' : '-30px'}`,
          }}
        >
          Empowers clinical decision-making
        </div>
      </div>
    </div>
  );
};

export default WhyKuvia;
