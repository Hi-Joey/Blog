import React, { Component } from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }

  //as useEffect in functional component
  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const postId = window.location.pathname.split("/")[2];
    console.log("postId", postId);

    try {
      const res = await axios.get(`http://localhost:3000/api/posts/${postId}`);
      console.log("response", res);
      console.log(res.data);
      this.setState({ post: res.data });
    } catch (err) {}
  }

  render() {
    const getText = (text) => {
      const doc = new DOMParser().parseFromString(text, "text/html");
      return doc.body.textContent;
    };

    const currentUser = JSON.parse(localStorage.getItem("user"));
    console.log("currentUser", currentUser);

    return (
      <div className="single">
        <div className="content">
          <img src={`../upload/${this.state.post.img}`} alt="image"></img>
          <div className="user">
            <img src={this.state.post.userImg} alt="image"></img>
            <div className="info">
              <span>{this.state.post.username}</span>
              <p>Posted {moment(this.state.post.date).fromNow()}</p>
            </div>
            {currentUser &&
              currentUser.username === this.state.post.username && (
                <EditPart post={this.state.post} />
              )}
          </div>
          <h1 className="title">
            {this.state.post ? this.state.post.title : null}
          </h1>
          {getText(this.state.post.description)}
        </div>
        <Menu cat={this.state.post.cat} />
      </div>
    );
  }
}

function EditPart({ post }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    localStorage.setItem("edit", JSON.stringify(post));
  };

  const handleDelete = async () => {
    const postId = window.location.pathname.split("/")[2];
    console.log("postId", postId);

    try {
      await axios.delete(`http://localhost:3000/api/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="edit">
      <Link to="/write?edit=2" state={post}>
        <img src={Edit} onClick={handleEdit} alt="Edit"></img>
      </Link>
      <img src={Delete} onClick={handleDelete} alt="Delete"></img>
    </div>
  );
}

// function EditPart() {
//   const navigate = useNavigate();

//   const handleEdit = () => {
//     localStorage.setItem("edit", JSON.stringify(this.state.post));
//   };

//   const handleDelete = async () => {
//     const postId = window.location.pathname.split("/")[2];
//     console.log("postId", postId);

//     try {
//       const res = await axios.delete(
//         `http://localhost:3000/api/posts/${postId}`
//       );
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="edit">
//       <Link to="/write?edit=2" state={this.state.post}>
//         <img src={Edit} onClick={handleEdit} alt="Edit"></img>
//       </Link>
//       <img src={Delete} onClick={handleDelete} alt="Delete"></img>
//     </div>
//   );
// }
