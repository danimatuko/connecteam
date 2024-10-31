import React, { useState } from 'react';

const TextArea = ({ label, value, onChange, fillColor = 'rgba(255, 153, 0, 1)', rows = 4 }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full mb-4">
      <textarea
        rows={rows}
        className={`peer w-full border-2 py-2 px-3 text-gray-900 rounded-lg outline-none transition-all duration-200
          ${focused ? 'pt-6' : 'pt-2'}
          ${focused ? `border-[${fillColor}]` : 'border-gray-300'}`}
        onFocus={() => setFocused(true)}
        onBlur={(e) => setFocused(!!e.target.value)}
        style={{ borderColor: focused ? fillColor : 'rgba(209, 213, 219, 1)' }}
        value={value}
        onChange={(e) => {
          setFocused(!!e.target.value); // Maintain focus state based on value
          if (onChange) onChange(e); // Call the onChange handler if provided
        }}
      />
      <label
        className={`absolute left-3 text-gray-500 transition-all duration-200
          ${focused ? '-top-3 text-sm' : 'top-2 text-base'}`}
        style={{
          color: focused ? fillColor : 'rgba(106, 106, 106, 1)',
          backgroundColor: focused ? 'rgba(248, 248, 248, 1)' : 'transparent',
          paddingLeft: focused ? '4px' : '0px',
          paddingRight: focused ? '4px' : '0px',
        }}
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;

