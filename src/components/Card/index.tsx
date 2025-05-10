import React from 'react';
import './index.scss'

interface CardProps {
  content: React.ReactNode;
  width?: string;
  height?: string;
}

const Card: React.FC<CardProps> = ({ content, width, height}) => {
  return (
    <div className='kuvia-card' style={{ width: width, height: height }}>
      <div className='kuvia-card-content'>
        {content}
      </div>
    </div>
  )
}

export default Card;