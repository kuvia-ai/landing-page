import React from 'react';
import './index.scss';

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'tertiary' | 'disabled';
  text: string;
  rounded?: boolean;
  bolded?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  text,
  rounded,
  bolded,
  onClick,
  style,
  className,
}) => {
  return (
    <button
      className={`kuvia-button kuvia-button--${type} ${rounded ? 'kuvia-button--rounded' : ''} ${bolded ? 'kuvia-button--bolded' : ''} ${className || ''}`}
      onClick={onClick}
      style={{ ...style }}
    >
      {text}
    </button>
  );
};

export default Button;
