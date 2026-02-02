import { useEffect, useState } from "react";
import { getNews } from "../services/newsService";
import type { Article } from "../types/news";
import NewsCard from "../components/NewsCard";

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getNews().then(setArticles);
  }, []);

  return (
    <div className="container">
      <div className="grid">
        {articles.map((a, i) => (
          <NewsCard key={i} article={a} />
        ))}
      </div>
    </div>
  );
}
