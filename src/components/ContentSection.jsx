import React, { useEffect, useState } from 'react';
import { useContentData } from '../hooks/useContentData';
import { useHeroContent } from '../hooks/useHeroContent';
import { generateSectionId } from '../utils/generateSectionId';
import { loadIcon } from '../utils/iconLoader'; // Import the loader function

function ContentSection({ dataName }) {
  const { data: contentData, error: contentError } = useContentData(dataName);
  const { heroContent, error: heroError } = useHeroContent('heroData');
  const isLoading = !contentData || !heroContent;
  const hasError = contentError || heroError;

  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const fetchIcon = async () => {
      if (contentData?.icon) {
        const loadedIcon = await loadIcon(contentData.icon);
        setIcon(loadedIcon);
      }
    };

    fetchIcon();
  }, [contentData?.icon]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (hasError) {
    return null; // Or return an error message component
  }

  const sectionId = generateSectionId(contentData.title);
  const adjustedDataName = dataName === 'sit-at-enim' ? 'sit-et-enim' : dataName;
  const fillColor = `hsla(${contentData.colorHue}, 100%, 43%, 1)`; // Full opacity for text
  const backgroundColor = `hsla(${contentData.colorHue}, 100%, 43%, 0.1)`; // Lower opacity for background
  const item = heroContent?.items.find(item => item.name === dataName);

  return (
    <section id={sectionId} className='container mx-auto lg:flex even:flex-row-reverse justify-between items-center gap-40 mb-4 xl:w-3/5'>
      <img
        className="w-screen lg:w-96 h-96 object-cover sm:rounded lg:rounded-full"
        src={`https://connecteam.com/static/frontend-home-task/jpg/${adjustedDataName}-small.jpg`}
        alt=""
      />
      <div className="container mx-auto p-4">
        <div className="content-section flex flex-col mb-8">
          <div className="flex items-center gap-3 mb-4">
            {icon && (
              <img
                className="w-12 rounded-full p-2"
                src={icon}
                alt="section-logo"
                style={{ backgroundColor: backgroundColor }} // Apply the background color with opacity
              />
            )}
            <div className="flex flex-col">
              <p className="text-sm text-gray-600">{contentData.label}</p>
              <h2
                className="text-2xl font-bold mb-4 font-merriweather"
                style={{ color: fillColor }}
              >
                {contentData.title}
              </h2>
            </div>
          </div>
          <div
            className="description text-gray-500 font-medium"
            dangerouslySetInnerHTML={{ __html: contentData.description }}
          />
        </div>
        <div className='flex items-center sm:gap-x-4 font-merriweather'>
          <a className="font-bold text-lg" href="#" style={{ color: fillColor }}>
            {item?.linkLabel}
          </a>
          <span className='ml-auto md:ml-1'>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fill: fillColor }} // Apply dynamic fill color here
            >
              <path d="M8.73864 15.0517L7.20242 13.5304L11.8036 8.92921H0.625V6.70691H11.8036L7.20242 2.11316L8.73864 0.584395L15.9723 7.81806L8.73864 15.0517Z" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;

