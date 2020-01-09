import React from "react";
import LikeButton from "./LikeButton";
import "../styles/News.css";
// class News extends React.component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       props
//     };
//   }
// }
const News = props => {
  const articles = props.filtered;
  const listArticles = articles.map((article, index) => (
    <div className="list_articles_container" key={index}>
      <li className="list_article_title">
        <h2>{article.title}</h2>
      </li>
      <li className="list_article_img_cont">
        <img
          className="list_article_img"
          src={article.urlToImage}
          alt="IMG not found"
        />
      </li>
      <li className="list_article_description">
        <h4>{article.description}</h4>
      </li>
      <li className="list_article_body">
        <p>
          {article.content} <a href={article.url}>Сontinue reading</a>
        </p>
      </li>
      <li>
        <p className="date_of_publ">{article.publishedAt}</p>
      </li>
      <div className="more_box">
        <LikeButton />
        {/* <p className="more">...</p> */}
      </div>
    </div>
  ));
  return (
    <div className="list_article_layer">
      <ul>{listArticles}</ul>
    </div>
  );
};
export default News;
