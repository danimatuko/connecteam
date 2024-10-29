
import React from 'react';
import '../style/logos-slider.css';
import { useIconPath } from '../hooks/useIconPath';

// Import JSON files directly
import dataRepudiandae from '../data/repudiandae.json';
import dataSitAtEnim from '../data/sit-at-enim.json';
import dataDoloreIpsum from '../data/dolore-ipsum.json';
import dataPraesentiumAspernatur from '../data/praesentium-aspernatur.json';

// Combine JSON data into a single array
const jsonData = [dataRepudiandae, dataSitAtEnim, dataDoloreIpsum, dataPraesentiumAspernatur];

function InfiniteLogoSlider() {
  return (
    <div className="infinite-slider-wrapper overflow-hidden">
      <div className="infinite-slider py-5">
        {jsonData.map((data, index) => (
          <div key={index} className="flex justify-between items-center mx-16">
            {/* Use custom hook to get the icon path */}
            <img src={useIconPath(data.icon)} alt={data.title} className="w-4 mr-1" />
            <p
              className="text-lg font-semibold"
              style={{ color: `hsla(${data.colorHue}, 100%, 43%, 1)` }} // Use colorHue from data
            >
              {data.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteLogoSlider;
