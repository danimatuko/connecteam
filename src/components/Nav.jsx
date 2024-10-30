
import React, { useEffect, useRef, useState } from 'react';
import '../style/nav.css';
import { useIconPath } from '../hooks/useIconPath';

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
        {jsonData.map((data, index) => (
          <div key={index} className="flex justify-between items-center">
            <img
              src={useIconPath(data.icon)}
              alt={data.title}
              className="w-4 mr-1"
            />
            <p
              className="text-lg font-semibold whitespace-nowrap"
              style={{ color: `hsla(${data.colorHue}, 100%, 43%, 1)` }}
            >
              {data.title}
            </p>
          </div>
        ))}
      </nav>
    </>
  );
};

export default Nav;
