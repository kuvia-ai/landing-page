import React from 'react';
import './index.scss';

interface IconCardProps {
  icon: string;
  text: string;
  iconWidth?: string;
  iconHeight?: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, text, iconWidth, iconHeight }) => {
  return (
    <div className="kuvia-icon-card">
      <div className="kuvia-icon-card-top">
        <img src={icon} alt={text} style={{ width: iconWidth, height: iconHeight }} />
      </div>
      <div className="kuvia-icon-card-bottom">
        <div className="kuvia-icon-card-bottom-content">
          <p>
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default IconCard;