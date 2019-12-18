import React from "react";
const News = props => {
  const numbers = props.filtered;
  const listArticles = numbers.map((number, index) => (
    <div className="list_articles_container" key={index}>
      <li className="list_article_title">
        <h2>{number.title}</h2>
      </li>
      <li className="list_article_description">
        <h4>{number.description}</h4>
      </li>
      <li className="list_article_body">
        <p>
          {number.content} <a href={number.url}>Сontinue reading</a>
        </p>
      </li>
      <li className="list_article_img_cont">
        <img className="list_article_img" src={number.urlToImage} alt="IMG" />
      </li>
    </div>
  ));
  return (
    <div className="list_article_layer">
      <ul>{listArticles}</ul>
    </div>
  );
};
export default News;
