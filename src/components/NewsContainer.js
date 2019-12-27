import React from "react";
import { connect } from "react-redux";
import { getArticles } from "../store/actions/index";
//import axios from "axios";
import News from "./News";
class NewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }
  componentDidMount() {
    // eslint-disable-next-line
    // // axios
    //   .get(
    //     "https://newsapi.org/v2/top-headlines?country=us&apiKey=00a3462d266d46af9a6f2050b45ff2fd"
    //   )
    //   .then(response => {
    //     const data = response.data.articles.slice(0, 15);
    //     this.setState({
    //       data,
    //       filtered: data
    //     });
    //   });
    this.props.getArticles();
  }
  handleChange = e => {
    /*let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.props.articles;
      newList = currentList.filter(item => {
        if (item.content) {
          const lc = item.content.toLowerCase();
          const filter = e.target.value.toLowerCase();
          return lc.includes(filter);
        } else {
          return false;
        }
      });
    } else {
      newList = this.props.articles;
    }
    this.setState({
      filtered: newList
    });*/
    this.setState({
      searchValue: e.target.value
    });
  };
  render() {
    if (this.props.articles.length !== 0) {
      return (
        <div className="news">
          <div>
            <input
              type="text"
              className="input"
              onChange={this.handleChange}
              placeholder="Search..."
            />
          </div>
          <div className="news_container">
            <News
              filtered={this.props.articles.filter(item => {
                if (item.content) {
                  const lc = item.content.toLowerCase();
                  const filter = this.state.searchValue.toLowerCase();
                  return lc.includes(filter);
                } else {
                  return false;
                }
              })}
            />
          </div>
        </div>
      );
    }
    return (
      <div className="news">
        <div className="news_container">
          <p>Загрузка...</p>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getArticles: () => dispatch(getArticles())
  };
};
const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
