import React from 'react';
import "./index.scss";

interface ButtonProps {
  type: string;
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ type, text, onClick, style, className }) => {
  return (
    <button
      className={`kuvia-button kuvia-button--${type} ${className || ""}`}
      onClick={onClick}
      style={{ ...style }}
    >
      {text}
    </button>
  );
};

export default Button;
