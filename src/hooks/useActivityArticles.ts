import { useContentful } from "../client/contentful";
import type { ActivityProps } from "../types/index";

// Custom hook to fetch activity articles from Contentful
export function useActivity() {
  return useContentful<ActivityProps>("activityArticles");
}


