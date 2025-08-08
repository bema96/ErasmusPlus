import * as contentful from "contentful";
import { useState, useEffect, useCallback } from 'react';
import { getLanguage } from '../utils/language';

// Contentful client setup
export const client = contentful.createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE || '',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '',
});

// Custom hook to fetch data from Contentful CMS
export function useContentful<T>(contentType: string) {
  // State to hold our data, loading status, and any errors
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to get data from Contentful
  const fetchData = useCallback(() => {
    // Clear any previous errors
    setError(null);
    // Show loading spinner
    setLoading(true);

    // Get entries from Contentful
    client.getEntries({ 
      content_type: contentType,
      locale: getLanguage() // Get current language (da or en)
    })
      .then((response) => {
        // Transform Contentful data to our format
        const items = response.items.map((item: any) => {
          // Get image if it exists
          const imageField = item.fields.image;
          
          return {
            id: item.sys.id,
            ...item.fields, // Spread all other fields
            // Create optimized image URL or null if no image
            image: imageField?.fields?.file?.url
              ? `https:${imageField.fields.file.url}?w=800&h=600&fit=fill&q=80&fm=webp`
              : null,
          };
        });

        // Save data and stop loading
        setData(items);
        setLoading(false);
      })
      .catch((err) => {
        // If something went wrong
        console.error('Contentful fetch error:', err);
        setError('Could not load data');
        setLoading(false);
      });
  }, [contentType]); // Only recreate if contentType changes

  // Fetch data when component first loads
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Return data and functions that components can use
  return { 
    data,        // The actual data array
    loading,     // True when fetching data
    error,       // Error message if something failed
    refetch: fetchData  // Function to manually refresh data
  };
}

