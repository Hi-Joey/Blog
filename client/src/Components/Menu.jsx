import React, { Component } from "react";
import axios from "axios";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cat !== this.props.cat) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { cat } = this.props;
    try {
      const res = await axios.get(`http://localhost:3000/api/posts?cat=${cat}`);
      console.log("menu_result", res.data);
      this.setState({ posts: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="menu">
        <h1>Other posts you may like</h1>
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <img src={`../upload/${post?.img}`} alt="" />
            <h2>{post.title}</h2>
            <button>Read More</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Menu;
