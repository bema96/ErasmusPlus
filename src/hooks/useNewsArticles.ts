import { useContentful } from "../client/contentful";
import type { NewsProps } from "../types/index";

export function useNews() {
  return useContentful<NewsProps>("newsArticles");
}


