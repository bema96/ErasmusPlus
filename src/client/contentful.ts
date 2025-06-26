import * as contentful from "contentful";
import { useCallback, useState, useEffect } from 'react';

export const client = contentful.createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export function useContentful<type>(contentType: string) {
  const [data, setData] = useState<type[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(() => {
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
      .catch(() => {
        setError('Fejl ved hentning af data');
        setLoading(false);
      });
  }, [contentType]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

