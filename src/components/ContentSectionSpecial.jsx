import React from 'react';
import { useContentData } from '../hooks/useContentData';
import { useHeroContent } from '../hooks/useHeroContent';
import { useIconPath } from '../hooks/useIconPath';
import { generateSectionId } from '../utils/generateSectionId';
import Arrow from './svg/Arrow';
import Button from './Button';
import SectionIcon from "../assets/icons/icon-4.svg?react";
import Icon6 from "../assets/icons/icon-6.svg?react";
import Icon7 from "../assets/icons/icon-7.svg?react";

function ContentSectionSpecial({ dataName = 'heroData' }) {
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
  const sectionId = generateSectionId(dataName); // Generate section ID based on dataName

  return (
    <section
      id={sectionId} // Add the section ID here
      className='relative bg-no-repeat bg-cover bg-center my-20'
      style={{ backgroundImage: `url(https://connecteam.com/static/frontend-home-task/jpg/${dataName}-small.jpg)` }}
    >
      {/* Overlay for the transparent background color */}
      <div className='absolute inset-0 opacity-90' style={{ backgroundColor: "rgba(0, 76, 108, 1)" }} />

      <div className='container mx-auto p-5 relative z-10 lg:w-4/5 xl:w-3/5 xl:text-center'>
        <div className="flex items-center lg:justify-center gap-3 mb-4">
          <div className="flex flex-col lg:items-center">
            <div className='rounded-full p-4' style={{ backgroundColor: fillColor }} >

              <SectionIcon className="w-16 h-16 mb-2 invert " />
            </div>
            <p className="text-sm mt-3" style={{ color: 'rgba(156, 184, 195, 1)' }}>{contentData.label}</p>
            <h2
              className="text-4xl font-bold mb-4 font-merriweather"
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
        <div className='my-5 w-full lg:w-fit h-0.5' style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}></div>
        <div className='flex flex-col justify-center lg:flex-row gap-4 py-5'>
          <Button
            text={linkLabel}
            color={fillColor}
            variant="filled"
            icon={<Arrow />}
            iconPosition="right"
          />
          <Button
            text={linkLabel}
            color={fillColor}
            variant="outlined"
            icon={<Icon6 />}
            iconPosition="left"
          />
          <Button
            text={linkLabel}
            color={fillColor}
            variant="outlined"
            icon={<Icon7 />}
            iconPosition="left"
          />
        </div>
      </div>
    </section>
  );
}

export default ContentSectionSpecial;

