
// Import React and necessary assets
import React from 'react';
import heroData from '../data/heroData.json';
import '../style/hero.css'; // Import the CSS file
import Header from './Header';
import arrowScroll from "../assets/arrow-scroll.svg"; // Import the arrow icon directly
import Button from './Button';
import Arrow from './svg/Arrow';
import Icon1 from "../assets/icons/icon-1.svg?react";


function Hero() {
  const { title, subtitle, links } = heroData.content.hero;

  return (
    <section className="hero-section relative text-white flex flex-col justify-center items-center px-10">

      <div className="flex flex-col md:w-3/4 lg:w-1/3 self-start lg:ml-[20%] mt-60 lg:-mt-52">

        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-merriweather">{title}</h1>
        <p className="mb-6 font-inter">{subtitle}</p>

        <div className="flex flex-col md:flex-row gap-2 w-full md:w-fit">
          <Button
            text={links[0].label}
            color="rgba(255, 153, 0, 1)"
            variant="filled"
            icon={<Arrow />}
            iconPosition="right"
          />
          <Button
            text={links[1].label}
            color="rgba(255, 153, 0, 1)"
            variant="outlined"
            icon={<Icon1 />}
            iconPosition="left"
          />
        </div>

        <img
          src={arrowScroll}
          alt="Scroll down arrow"
          className="mx-auto mt-10 lg:absolute bottom-12 animate-bounce w-10"
        />
      </div>
    </section>
  );
}

export default Hero;
