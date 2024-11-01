import React from 'react';
import "../style/button.css";

const Button = ({
  text,
  color = '#3498db',
  variant = 'filled',
  icon,
  iconPosition = 'left',
  additionalClasses = '', // New additionalClasses prop
}) => {
  return (
    <button
      className={`btn font-merriweather ${variant === 'outlined' ? 'btn-outlined' : 'btn-filled'} ${additionalClasses}`} // Include additionalClasses prop here
      style={{
        backgroundColor: variant === 'filled' ? color : 'transparent',
        color: variant === 'filled' ? '#fff' : color,
        borderColor: color,
      }}
    >
      {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
      <span>{text}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
    </button>
  );
};

export default Button;

