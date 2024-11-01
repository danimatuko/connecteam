
import React from 'react';

const Arrow = ({ color = 'white' }) => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.73864 14.5518L7.20242 13.0305L11.8036 8.42933H0.625V6.20703H11.8036L7.20242 1.61328L8.73864 0.0845167L15.9723 7.31818L8.73864 14.5518Z"
        fill={color}  // Use color prop for fill
      />
    </svg>
  );
};

export default Arrow;
