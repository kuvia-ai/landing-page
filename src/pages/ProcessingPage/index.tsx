import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import ProcessingLoader from '../../components/ProcessingLoader';
import SearchPatient from '../../components/SearchPacient';
import KuvIAIcon from '../../icons/KuvIAIcon';
import imgColon1 from '../../images/colon1.png';
import imgColonHeatmap1 from '../../images/colon-heatmap1.jpg';
import imgColon2 from '../../images/colon2.jpg';
import imgColonHeatmap2 from '../../images/colon-heatmap2.jpg';
import imgColon3 from '../../images/colon3.png';
import imgColonHeatmap3 from '../../images/colon-heatmap3.jpg';
import imgColon4 from '../../images/colon4.png';
import imgColonHeatmap4 from '../../images/colon-heatmap4.jpg';
import './index.scss';

interface PatientData {
  patient_name: string;
  src_image: string;
  processed_image: string;
  prediction: string;
}

const patient_data: PatientData[] = [
  {
    patient_name: 'Patient A',
    src_image: imgColon1,
    processed_image: imgColonHeatmap1,
    prediction: 'MSI NEGATIVE',
  },
  {
    patient_name: 'Patient B',
    src_image: imgColon2,
    processed_image: imgColonHeatmap2,
    prediction: 'MSI NEGATIVE',
  },
  {
    patient_name: 'Patient C',
    src_image: imgColon3,
    processed_image: imgColonHeatmap3,
    prediction: 'MSI POSITIVE',
  },
  {
    patient_name: 'Patient D',
    src_image: imgColon4,
    processed_image: imgColonHeatmap4,
    prediction: 'MSI POSITIVE',
  },
];

const ProcessingPage: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPredictionComplete, setIsPredictionComplete] =
    useState<boolean>(false);

  const navigate = useNavigate();

  const handlePredictionClick = () => {
    setIsLoading(true);
    setIsPredictionComplete(false);
    setTimeout(() => {
      setIsLoading(false);
      setIsPredictionComplete(true);
      setTimeout(() => {
        const goToPrediction = document.getElementById('patient-prediction');
        if (goToPrediction) {
          goToPrediction.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }, 100);
    }, 4100);
  };

  return (
    <div className="processing-page">
      <nav className="processing-page-navigation-bar">
        <div className="kuvia-logo" onClick={() => navigate('/')}>
          <KuvIAIcon />
        </div>
        <Button
          text={'Back to Home'}
          onClick={() => navigate('/')}
          style={{ marginRight: '20px' }}
        />
      </nav>
      <SearchPatient
        setSelectedPatient={setSelectedPatient}
        setIsPredictionComplete={setIsPredictionComplete}
      />
      {selectedPatient && (
        <div className="processing-page-content">
          <div className="processing-page-images-layout">
            <div
              className={`patient-tissue-unprocessed ${
                isPredictionComplete ? 'end' : ''
              }`}
            >
              <div className="patient-tissue-image-card">
                <img
                  src={
                    patient_data.filter(
                      (data) => data.patient_name === selectedPatient
                    )[0].src_image
                  }
                  alt="patient-tissue"
                />
              </div>
            </div>
            {isPredictionComplete && (
              <div className="patient-tissue-processed">
                <div className="patient-tissue-image-card">
                  <img
                    src={
                      patient_data.filter(
                        (data) => data.patient_name === selectedPatient
                      )[0].processed_image
                    }
                    alt="patient-tissue"
                  />
                </div>
                <div className="heat-thermometer-labels">
                  <p className="heat-thermometer-right-label">High Relevance</p>
                  <div className="heat-thermometer"></div>
                  <p className="heat-thermometer-left-label">Low Relevance</p>
                </div>
              </div>
            )}
          </div>
          {!isPredictionComplete && !isLoading ? (
            <Button
              text={'Make Prediction'}
              onClick={handlePredictionClick}
              style={{
                marginTop: '20px',
                marginInline: 'auto',
              }}
            />
          ) : isLoading ? (
            <ProcessingLoader style={{ marginTop: '10px' }} />
          ) : (
            <div
              id="patient-prediction"
              className="patient-prediction"
            >{`PREDICTION: ${
              patient_data.filter(
                (data) => data.patient_name === selectedPatient
              )[0].prediction
            }`}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProcessingPage;
