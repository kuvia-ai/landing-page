import React from 'react';
import "./index.scss"

interface ProcessingLoaderProps {
  style?: React.CSSProperties;
}

const ProcessingLoader: React.FC<ProcessingLoaderProps> = ({style}) => {
  return (
    <div className="processing-loader" style={style}>
      <div className="processing-loader-label">
        <p>Loading</p>
        <p className="processing-loader-first-dot">.</p>
        <p className="processing-loader-second-dot">.</p>
        <p className="processing-loader-third-dot">.</p>
      </div>
      <div className="processing-loader-container">
        <div className="processing-loader-progress"></div>
      </div>
    </div>
  )
}

export default ProcessingLoader;