import React from 'react';
import './index.scss';

interface SliderControlProps {
  dimension: number;
  activeItem: number;
  onClick: (val: number) => void;
}

const SliderControl: React.FC<SliderControlProps> = ({
  dimension,
  activeItem,
  onClick,
}) => {
  return (
    <div className="kuvia-slider-control">
      {[...Array(dimension)].map((_, index) => (
        <div
          className={`kuvia-slider-item ${activeItem === index ? 'active' : 'disabled'}`}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default SliderControl;
