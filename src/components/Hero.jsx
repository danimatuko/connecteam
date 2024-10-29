
// Import React, JSON data, and necessary assets
import React from 'react';
import heroData from '../data/heroData.json';
import '../style/hero.css'; // Import the CSS file
import { useIconPath } from '../hooks/useIconPath'; // Import the custom hook
import Header from './Header';
import arrowScroll from "../assets/arrow-scroll.svg"; // Import the arrow icon directly

function Hero() {
  const { title, subtitle, links } = heroData.content.hero;

  return (
    <section className="hero-section relative text-white flex flex-col justify-center items-center px-10">
      <Header />

      <div className="flex flex-col md:w-3/4 lg:w-1/3 self-start lg:ml-[20%] mt-60 lg:-mt-52">
        <img
          className="hidden lg:block invert mb-24"
          src="https://connecteam.com/static/frontend-home-task/svg/logo.svg"
          alt="logo"
        />

        <h1 className="text-4xl font-bold mb-4 font-inter">{title}</h1>
        <p className="mb-6 font-inter">{subtitle}</p>

        <div className="flex flex-col md:flex-row gap-2 w-full md:w-fit">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`px-8 py-3 font-semibold rounded-full ${link.primary
                ? 'bg-primary text-primary-text hover:bg-yellow-600' // Primary Button
                : 'bg-secondary text-primary hover:bg-gray-300' // Secondary Button
                }`}
            >
              <span className="flex justify-center items-center">
                {link.label}
                {link.icon && (
                  <img
                    src={useIconPath(link.icon)}
                    alt={link.label}
                    className="mx-2 w-4"
                  />
                )}
              </span>
            </a>
          ))}
        </div>

        <img
          src={arrowScroll}
          alt="Scroll down arrow"
          className="mx-auto mt-10 lg:absolute bottom-12 animate-bounce w-10" // Adjust styles as needed
        />
      </div>
    </section>
  );
}

export default Hero;
