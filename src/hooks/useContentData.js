
// hooks/useContentData.js

import { useState, useEffect } from 'react';

export const useContentData = (dataName) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!dataName) {
      setError("Data name is required");
      return;
    }

    const loadData = async () => {
      try {
        // Dynamically import JSON based on dataName
        const module = await import(`../data/${dataName}.json`);
        setData(module.default);
      } catch (err) {
        setError(`Failed to load data for "${dataName}": ${err.message}`);
      }
    };

    loadData();
  }, [dataName]);

  return { data, error };
};
