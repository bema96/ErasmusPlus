import { useContentful } from "../client/contentful";
import type { ActivityProps } from "../types/index";

export function useActivity() {
  return useContentful<ActivityProps>("activityArticles");
}


