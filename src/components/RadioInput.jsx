// RadioInput.js
import React, { useState } from 'react';

const RadioInput = ({ label, options, fillColor = 'rgba(255, 153, 0, 1)', textColor = 'orange' }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (value) => {
    setSelectedOption(value);
  };

  const getOptionClassNames = (option) => {
    const isSelected = selectedOption === option.value;

    return `flex-1 cursor-pointer text-center py-2 rounded-full transition-all duration-200 
      ${isSelected ? `bg-[${fillColor}] text-white border-[${textColor}]` : 'bg-transparent text-gray-700'}`;
  };

  const getContainerClassNames = () => {
    return `flex border-2 rounded-full p-1 transition-all duration-200 bg-white 
      ${selectedOption ? `border-[${textColor}]` : 'border-gray-300'}`;
  };

  return (
    <div className="relative w-full mb-4">
      <label className="block text-gray-700 mb-2">{label}</label>
      <div className={getContainerClassNames()}>
        {options.map((option) => (
          <div
            key={option.value}
            className={getOptionClassNames(option)}
            onClick={() => handleChange(option.value)}
            style={{
              border: selectedOption === option.value ? `2px solid ${textColor}` : 'none',
              color: selectedOption === option.value ? `${textColor}` : 'none',
            }}
          >
            {option.label}
          </div>
        ))}
      </div>
      <input
        type="radio"
        value={selectedOption}
        checked={!!selectedOption}
        onChange={() => { }} // Prevent change event on the hidden input
        className="hidden"
      />
    </div>
  );
};

export default RadioInput;

