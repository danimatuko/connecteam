
import React,{useState} from 'react';

function HeroSection() {
const [first, setFirst] = useState()

  return (
    <section className="bg-blue-500 text-white h-screen flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Site</h1>
      <p className="text-lg md:text-xl max-w-xl mb-6">
        Discover the best content and services tailored just for you. Start exploring today!
      </p>
      <button className="px-8 py-3 bg-white text-blue-500 font-semibold rounded-full hover:bg-gray-100 transition duration-300">
        Get Started
      </button>
    </section>
  );
}

export default HeroSection
