
import React from 'react';
import { useContentData } from '../hooks/useContentData';
import { useHeroContent } from '../hooks/useHeroContent';
import { useIconPath } from '../hooks/useIconPath';
import Arrow from './svg/Arrow';
import Button from './Button';
import SectionIcon from "../assets/icons/icon-4.svg?react";


function ContentSectionSpecial({ dataName }) {
  const { data: contentData, error: contentError } = useContentData(dataName);
  const { heroContent, error: heroError } = useHeroContent('heroData');
  const item = heroContent?.items.find(item => item.name === dataName);

  // Check if item exists before destructuring
  const { additionalLinks, linkLabel } = item || {};

  const iconPath = useIconPath(contentData?.heroLink?.icon);

  if (contentError || heroError) {
    return <p>Error loading content</p>;
  }
  if (!contentData || !heroContent) {
    return <p>Loading...</p>;
  }

  // Generate the color for the SVG fill
  const fillColor = `hsla(${contentData.colorHue}, 100%, 43%, 1)`;

  return (
    <section
      className='relative bg-no-repeat bg-cover bg-center'
      style={{ backgroundImage: `url(https://connecteam.com/static/frontend-home-task/jpg/${dataName}-small.jpg)` }}
    >
      {/* Overlay for the transparent background color */}
      <div className='absolute inset-0 opacity-50' style={{ backgroundColor: fillColor }} /> {/* Increased opacity for better coverage */}

      <div className='container mx-auto p-5 relative z-10'>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex flex-col">
            {/* Use as React Component */}
            <SectionIcon className="w-16 h-16 mb-2" fill={fillColor} />
            {/* Use as Image Source */}
            <p className="text-sm text-white">{contentData.label}</p>
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: fillColor }}
            >
              {contentData.title}
            </h2>
          </div>
        </div>
        <div
          className="description text-white font-medium text-lg"
          dangerouslySetInnerHTML={{ __html: contentData.description }}
        />
        <div className='my-5 w-full h-0.5' style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}></div>
        <div className='flex flex-col gap-4 py-5'>
          <Button
            text={linkLabel}
            color={fillColor}
            variant="filled"
            icon={<Arrow />}
            iconPosition="right"
          />
          {additionalLinks?.map((link, index) => (
            <Button
              key={index}
              text={link.label}
              color={fillColor}
              variant="outlined"
              icon={<Arrow color={fillColor} />}
              iconPosition="left"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContentSectionSpecial;
