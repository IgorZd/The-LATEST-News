import React from "react";
import "../styles/LikeButton.css";
import like from "../images/like.png";
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      updated: false
    };
  }
  updateLikes = () => {
    if (!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });
    } else {
      this.setState((prevState, props) => ({
        likes: prevState.likes - 1,
        updated: false
      }));
    }
  };
  render() {
    return (
      <div className="like_container">
        <p className="like_count">{this.state.likes}</p>
        <img
          src={like}
          alt="LIKE"
          className="like_btn_1"
          onClick={this.updateLikes}
        ></img>
      </div>
    );
  }
}
export default LikeButton;
