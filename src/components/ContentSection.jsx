
import React from 'react';
import { useContentData } from '../hooks/useContentData';
import { useHeroContent } from '../hooks/useHeroContent';
import { useIconPath } from '../hooks/useIconPath';

function ContentSection() {
  const { data: contentData, error: contentError } = useContentData('repudiandae');
  const { heroContent, error: heroError } = useHeroContent('heroData');
  // Extract the item based on the name directly
  const item = heroContent?.items.find(item => item.name === 'repudiandae');
  const iconPath = useIconPath(contentData?.heroLink?.icon);

  // Handle errors and loading states
  if (contentError || heroError) {
    return <p>Error: {contentError?.message || heroError?.message}</p>;
  }
  if (!contentData || !heroContent) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div
        className="content-section flex flex-col mb-4"
      >
        <div className="flex items-center gap-3 mb-4">
          <img className="w-16" src={iconPath} alt="" />
          <div className="flex flex-col">
            <p className="text-sm text-gray-600">{contentData.label}</p>
            <h2 className="text-2xl font-bold mb-4" style={{ color: `hsla(${contentData.colorHue}, 100%, 43%, 1)` }}
            >{contentData.title}</h2>
          </div>
        </div>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: contentData.description }}
        />
      </div>
      <a className='font-bold' href="#" style={{ color: `hsla(${contentData.colorHue}, 100%, 43%, 1)` }}
      >{item.linkLabel}</a>
    </div>
  );
}

export default ContentSection;
