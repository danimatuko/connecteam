
import React from 'react';
import { useContentData } from '../hooks/useContentData';
import { useHeroContent } from '../hooks/useHeroContent';
import { useIconPath } from '../hooks/useIconPath';
import InputField from './InputField';
import SelectField from './SelectField';

const Footer = ({ dataName }) => {
  const { data: footerData, error: contentError } = useContentData(dataName);
  const { heroContent, error: heroError } = useHeroContent('heroData');
  const iconPath = useIconPath(footerData?.icon);
  const formFields = footerData?.form.fields
  console.log(formFields)
  if (contentError || heroError) {
    return null;
  }
  if (!footerData || !heroContent) {
    return <p>Loading...</p>;
  }

  const fillColor = "rgba(255, 153, 0, 1)";

  return (
    <footer className="py-6" style={{ backgroundColor: "rgba(248, 248, 248, 1)" }}>
      <div className="container mx-auto px-4">
        <div className="footer-inner d-flex flex-col items-center">
          <div className="footer-content d-flex flex-col items-center">
            <h2 className="font-merriweather text-xl font-bold mb-6" style={{ color: fillColor }}>
              {footerData.intro.title}
            </h2>
            <p className="text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: footerData.intro.text }}></p>

            <div className="flex items-center sm:gap-x-4 font-merriweather">
              <a className="font-bold text-lg" href={footerData.intro.link.href} style={{ color: fillColor }}>
                {footerData.intro.link.label}
              </a>
              <span className="ml-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fill: fillColor }}>
                  <path d="M8.73864 15.0517L7.20242 13.5304L11.8036 8.92921H0.625V6.70691H11.8036L7.20242 2.11316L8.73864 0.584395L15.9723 7.81806L8.73864 15.0517Z" />
                </svg>
              </span>
            </div>
            <div className='my-5 w-full lg:w-fit h-0.5' style={{ backgroundColor: "rgba(0, 0, 0, 0.08)" }}></div>
          </div>
          <div className="footer-form d-flex flex-col items-center">
            <div className="form-title mb-6">{footerData.form.title}</div>
            <div className="footer-form d-flex flex-col justify-center items-center w-full">
              <InputField label={formFields[0].name} />
              <InputField label={formFields[1].name} />

              <SelectField label={formFields[4].name} options={formFields[4].options} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
