import * as contentful from "contentful";
import { useCallback, useState, useEffect } from 'react';

// Validate environment variables
const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

if (!SPACE_ID || !ACCESS_TOKEN) {
  console.error('Contentful environment variables are missing!');
  console.error('Required: VITE_CONTENTFUL_SPACE and VITE_CONTENTFUL_ACCESS_TOKEN');
}

export const client = contentful.createClient({
  space: SPACE_ID || '',
  accessToken: ACCESS_TOKEN || '',
});

export function useContentful<type>(contentType: string) {
  const [data, setData] = useState<type[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(() => {
    // Check if Contentful is properly configured
    if (!SPACE_ID || !ACCESS_TOKEN) {
      setError('Contentful er ikke konfigureret korrekt. Kontakt administratoren.');
      setLoading(false);
      return;
    }

    setLoading(true);
    client.getEntries({ 
      content_type: contentType,
      
    })
      .then((response) => {
        const items = response.items.map((item: any) => ({
          id: item.sys.id,
          ...item.fields,
          // Convert Contentful asset links to URLs
          image: item.fields.image?.fields?.file?.url ? `https:${item.fields.image.fields.file.url}` : item.fields.image
        }));
        setData(items);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.error('Contentful fetch error:', err);
        setError('Fejl ved hentning af data fra Contentful');
        setLoading(false);
      });
  }, [contentType]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

