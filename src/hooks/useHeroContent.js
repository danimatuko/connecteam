
// hooks/useHeroContent.js

import { useState, useEffect } from 'react';

export const useHeroContent = (dataName) => {
  const [heroContent, setHeroContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroContent = async () => {
      try {
        const response = await import(`../data/${dataName}.json`);
        setHeroContent(response.default.content); // Adjust according to your JSON structure
      } catch (err) {
        setError(err);
      }
    };

    fetchHeroContent();
  }, [dataName]);

  return { heroContent, error };
};
