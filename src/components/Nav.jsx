import React, { useEffect, useRef, useState } from 'react';
import '../style/nav.css';
import { useIconPath } from '../hooks/useIconPath';
import { generateSectionId } from '../utils/generateSectionId'; // Import the helper function

// Import JSON files directly
import dataRepudiandae from '../data/repudiandae.json';
import dataSitAtEnim from '../data/sit-at-enim.json';
import dataDoloreIpsum from '../data/dolore-ipsum.json';
import dataPraesentiumAspernatur from '../data/praesentium-aspernatur.json';
import Header from './Header';

// Combine JSON data into a single array
const jsonData = [
  dataRepudiandae,
  dataSitAtEnim,
  dataDoloreIpsum,
  dataPraesentiumAspernatur,
];

const Nav = () => {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll status

  useEffect(() => {
    const header = document.querySelector('.site-header');

    const handleScroll = () => {
      // Check if the window is scrolled
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
        navRef.current.classList.add('scrolled');
        setIsScrolled(true); // Update scroll state
      } else {
        header.classList.remove('scrolled');
        navRef.current.classList.remove('scrolled');
        setIsScrolled(false); // Update scroll state
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header logoClass={isScrolled ? '' : 'invert'} /> {/* Pass the logo class based on scroll state */}
      <nav
        ref={navRef}
        className="sticky-nav flex justify-center gap-x-20 py-10 overflow-x-scroll md:overflow-x-auto transition-colors duration-300"
      >
        {jsonData.map((data, index) => {
          const sectionId = generateSectionId(data.title); // Use the helper function to generate the ID
          const linkColor = `hsla(${data.colorHue}, 100%, 43%, 1)`;
          const hoverBackgroundColor = `hsla(${data.colorHue}, 100%, 90%, 0.2)`;

          return (
            <a
              key={index}
              href={`#${sectionId}`} // Use generated ID in href
              className="flex justify-between items-center px-4 py-2 rounded transition-colors duration-300"
              style={{
                color: linkColor,
                scrollBehavior: 'smooth', // Optional for smooth scrolling
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverBackgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <img
                src={useIconPath(data.icon)}
                alt={data.title}
                className="w-4 mr-1"
              />
              <p className="text-lg font-semibold whitespace-nowrap">
                {data.title}
              </p>
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default Nav;

