import { useContentful } from "../client/contentful";
import type { NewsProps } from "../types/index";

// Custom hook to fetch news articles from Contentful
export function useNews() {
  return useContentful<NewsProps>("newsArticles");
}


