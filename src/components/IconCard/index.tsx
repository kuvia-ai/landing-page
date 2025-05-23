import React from 'react';
import './index.scss';

interface IconCardProps {
  icon: string;
  type?: string;
  title: string;
  text: string;
  displayBadge?: boolean;
  badgeCount?: string | number;
  iconWidth?: string;
  iconHeight?: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, type = 'default', title, text, displayBadge = false, badgeCount, iconWidth, iconHeight }) => {
  return (
    <div className={`kuvia-icon-card  kuvia-icon-card--${type}`}>
      <div className="kuvia-icon-card-icon-container">
        <div className="kuvia-icon-card-icon">
          <img src={icon} alt={icon} style={{ width: iconWidth, height: iconHeight }} />
        </div>
        <div className="kuvia-icon-card-badge">{badgeCount}</div>
      </div>
      <div className="kuvia-icon-card-content">
        <p className="kuvia-icon-card-title">{title}</p>
        <p className="kuvia-icon-card-text">{text}</p>
      </div>
    </div>
  )
}

export default IconCard;