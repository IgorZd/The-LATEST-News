import React from "react";
import LikeButton from "./LikeButton";
import "../styles/News.css";
// const showArticle = () => {
//   return (displayArticle = "none");
// };
const News = props => {
  const articles = props.filtered;
  console.log(props.articleBodyStyle);
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
      <div className="more_box">
        <LikeButton />
        <p className="more" /*onClick={showArticle()}*/>...</p>
      </div>

      <li className="list_article_body">
        <p>
          {article.content} <a href={article.url}>Сontinue reading</a>
        </p>
      </li>
      <li>
        <p className="date_of_publ">{article.publishedAt}</p>
      </li>
    </div>
  ));
  const bodyArticle = document.getElementsByClassName("list_article_body"),
    moreBtn = document.getElementsByClassName("more"),
    showContent = () => {
      console.log(bodyArticle[0]);
    };
  // const addContent = () => {
  //   moreBtn.addEventListener("click", () => {
  //     console.log(bodyArticle.style.display);
  //   });
  // };
  // addContent();
  showContent();
  console.log(bodyArticle);
  return (
    <div className="list_article_layer">
      <ul>{listArticles}</ul>
    </div>
  );
};
export default News;
