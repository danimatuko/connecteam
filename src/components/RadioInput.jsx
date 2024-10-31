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
      ${isSelected ? `bg-[${fillColor}] text-white` : 'bg-transparent text-gray-700'}`;
  };

  const getContainerClassNames = () => {
    return `flex flex-col md:flex-row border-1 rounded-lg md:rounded-full p-1 transition-all duration-200 bg-white 
      border-gray-600`;
  };

  return (
    <div className="relative w-full mb-4 font-bold">
      <label className="block text-gray-700 mb-2">{label}</label>
      <div className={getContainerClassNames()}>
        {options.map((option) => (
          <div
            key={option.value}
            className={getOptionClassNames(option)}
            onClick={() => handleChange(option.value)}
            style={{
              border: selectedOption === option.value ? `2px solid ${textColor}` : 'none',
              color: selectedOption === option.value ? `${textColor}` : 'gray',
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

