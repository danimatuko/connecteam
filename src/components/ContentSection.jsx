

import React from 'react';
import { useContentData } from '../hooks/useContentData';
import { useHeroContent } from '../hooks/useHeroContent';
import { useIconPath } from '../hooks/useIconPath';

function ContentSection({ dataName }) {
  const { data: contentData, error: contentError } = useContentData(dataName);
  const { heroContent, error: heroError } = useHeroContent('heroData');

  const item = heroContent?.items.find(item => item.name === dataName);
  const iconPath = useIconPath(contentData?.heroLink?.icon);

  if (contentError || heroError) {
    return;
  }
  if (!contentData || !heroContent) {
    return <p>Loading...</p>;
  }

  // Generate the color for the SVG fill
  const fillColor = `hsla(${contentData.colorHue}, 100%, 43%, 1)`;

  //<img className="hidden md:block w-96 h-96 object-cover rounded-full" src="https://connecteam.com/static/frontend-home-task/jpg/repudiandae-small.jpg" alt="" />
  return (
    <section className='container mx-auto lg:flex odd:flex-row-reverse justify-between items-center gap-40 mb-4  xl:w-3/5'>

      <img
        className="w-screen lg:w-96 h-96 object-cover sm:rounded lg:rounded-full"
        src={`https://connecteam.com/static/frontend-home-task/jpg/${dataName}-small.jpg`}
        alt=""
      />
      <div className="container mx-auto p-4">
        <div className="content-section flex flex-col mb-8">

          <div className="flex items-center gap-3 mb-4">
            <img className="w-16" src={iconPath} alt="" />
            <div className="flex flex-col">
              <p className="text-sm text-gray-600">{contentData.label}</p>
              <h2
                className="text-2xl font-bold mb-4"
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
        <div className='flex items-center sm:gap-x-4'>

          <a className="font-bold text-lg" href="#" style={{ color: fillColor }}>
            {item.linkLabel}
          </a>
          <span>
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
