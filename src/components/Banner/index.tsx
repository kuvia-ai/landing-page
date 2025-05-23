import React from 'react';
import './index.scss';

interface BannerProps {
  text: string;
}

const Banner: React.FC<BannerProps> = ({text}) => {
  return (
    <div className='kuvia-banner'>
      <p>{text}</p>
    </div>
  )
}

export default Banner;