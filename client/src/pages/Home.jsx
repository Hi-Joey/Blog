import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };

    this.fetchData = this.fetchData.bind(this);
  }

  //as useEffect in functional component
  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);

    const cat = urlParams.get("cat");
    console.log(cat);
    const res = null;
    try {
      if (cat === null) {
        const res = await axios.get(`http://localhost:3000/api/posts`);
        this.setState({ posts: res.data });
      } else {
        const res = await axios.get(
          `http://localhost:3000/api/posts?cat=${cat}`
        );
        this.setState({ posts: res.data });
      }

      console.log(res.data);
      this.setState({ posts: res.data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    // const posts = [
    //   {
    //     id: 1,
    //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat, nulla tempor vestibulum facilisis, nunc lorem accumsan lorem, ut congue tortor nibh ut enim. In vel vehicula ante. Curabitur eget ultricies magna, id posuere dolor. Suspendisse ut ligula vitae lorem iaculis molestie. Suspendisse molestie lacus eget tincidunt sodales. Nunc sed eleifend dui, sed condimentum nibh. Suspendisse at ipsum malesuada velit ultrices ultricies in in nulla. Etiam ut malesuada purus. Fusce pharetra dui ut ullamcorper dictum. Aliquam erat volutpat. Sed eu efficitur augue.",
    //     img: "https://source.unsplash.com/random",
    //   },
    //   {
    //     id: 2,
    //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat, nulla tempor vestibulum facilisis, nunc lorem accumsan lorem, ut congue tortor nibh ut enim. In vel vehicula ante. Curabitur eget ultricies magna, id posuere dolor. Suspendisse ut ligula vitae lorem iaculis molestie. Suspendisse molestie lacus eget tincidunt sodales. Nunc sed eleifend dui, sed condimentum nibh. Suspendisse at ipsum malesuada velit ultrices ultricies in in nulla. Etiam ut malesuada purus. Fusce pharetra dui ut ullamcorper dictum. Aliquam erat volutpat. Sed eu efficitur augue.",
    //     img: "https://source.unsplash.com/random",
    //   },
    //   {
    //     id: 3,
    //     title:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit.rem iaculis molestie.",
    //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat, nulla tempor vestibulum facilisis, nunc lorem accumsan lorem, ut congue tortor nibh ut enim. In vel vehicula ante. Curabitur eget ultricies magna, id posuere dolor. Suspendisse ut ligula vitae lorem iaculis molestie. Suspendisse molestie lacus eget tincidunt sodales. Nunc sed eleifend dui, sed condimentum nibh. Suspendisse at ipsum malesuada velit ultrices ultricies in in nulla. Etiam ut malesuada purus. Fusce pharetra dui ut ullamcorper dictum. Aliquam erat volutpat. Sed eu efficitur augue.",
    //     img: "https://source.unsplash.com/random",
    //   },
    // ];
    const getText = (text) => {
      const doc = new DOMParser().parseFromString(text, "text/html");
      return doc.body.textContent;
    };

    return (
      <div className="home">
        <div className="posts">
          {this.state.posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="image">
                <img src={`./upload/${post.img}`} alt="post" />
              </div>
              <div className="content">
                <Link
                  //onClick={this.fetchData}
                  className="link"
                  to={`post/${post.id}`}
                >
                  <h1>{post.title}</h1>
                </Link>
                <p>{getText(post.description)}</p>
                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
