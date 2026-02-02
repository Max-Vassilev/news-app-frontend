import type { Article } from "../types/news";

interface ApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

const API =
  "/api/v2/top-headlines?country=us&apiKey=444382da6ade4503b04b09d55c062364";

export const getNews = async (): Promise<Article[]> => {
  const res = await fetch(API);

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const data: ApiResponse = await res.json();
  return data.articles;
};
