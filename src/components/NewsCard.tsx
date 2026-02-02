import type { Article } from "../types/news";
import "./NewsCard.css";

export default function NewsCard({ article }: { article: Article }) {
  const date = new Date(article.publishedAt).toLocaleDateString();

  return (
    <div className="card">
      <img
        src={article.urlToImage || "/images/placeholder.jpg"}
        alt={article.title}
      />

      <div className="card-body">
        <div className="card-meta">
          <span>{article.source.name}</span>
          {article.author && <span> • {article.author}</span>}
          <span> • {date}</span>
        </div>

        <h3 className="card-title">{article.title}</h3>

        <p className="card-desc">
          {article.description || ""}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="read-link"
        >
          Read full article
        </a>

        <button className="button">Save</button>
      </div>
    </div>
  );
}
