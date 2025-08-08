import * as contentful from "contentful";
import { useState, useEffect, useCallback } from 'react';
import { getLanguage } from '../utils/language';

// Contentful client setup
export const client = contentful.createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE || '',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '',
});

// Hook to fetch data from Contentful
export function useContentful<T>(contentType: string) {
  // State to hold data, loading and error
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch data (reusable)
  const fetchData = useCallback(() => {
    // Start loading
    setLoading(true);
    setError(null);

    // Get current language
    const currentLanguage = getLanguage();

    // Fetch data from Contentful with language
    client.getEntries({ 
      content_type: contentType,
      locale: currentLanguage  // Use language from localStorage
    })
      .then((response) => {
        // Convert Contentful data to simple format
        const items = response.items.map((item: any) => {
          const imageField = item.fields.image;

          return {
            id: item.sys.id,
            ...item.fields,
            image: imageField?.fields?.file?.url
              ? `https:${imageField.fields.file.url}`
              : null,
          };
        });

        // Save data and stop loading
        setData(items);
        setLoading(false);
      })
      .catch((err) => {
        // If there's an error
        console.error('Error:', err);
        setError('Could not fetch data');
        setLoading(false);
      });
  }, [contentType]); // Dependencies for useCallback

  // Fetch data when component loads
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Return data, loading state, error and refetch function
  return { data, loading, error, refetch: fetchData };
}

