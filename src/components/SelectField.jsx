
// SelectField.js
import React, { useState } from 'react';
import { useIconPath } from '../hooks/useIconPath';

const SelectField = ({ label, options = [], fillColor = 'rgba(255, 153, 0, 1)' }) => {
  const [focused, setFocused] = useState(false);
  const iconPath = useIconPath('arrow-select');

  return (
    <div className="relative w-full mb-4">
      <label
        className="block mb-1 text-gray-500  font-bold"
        style={{ color: focused ? fillColor : 'rgba(106, 106, 106, 1)' }}
      >
        {label}
      </label>
      <select
        className="w-full border-2 py-2 px-3 text-gray-900 rounded-full outline-none transition-all duration-200 appearance-none"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          borderColor: focused ? fillColor : 'rgba(209, 213, 219, 1)',
          backgroundColor: 'white',
        }}
      >
        <option value="" disabled hidden>
          Select {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span
        className="absolute right-4 top-2/3 transform -translate-y-1/2 pointer-events-none"
        style={{
          color: focused ? fillColor : 'rgba(209, 213, 219, 1)',
        }}
      >
        <img src={iconPath} alt="" />
      </span>
    </div>
  );
};

export default SelectField;
