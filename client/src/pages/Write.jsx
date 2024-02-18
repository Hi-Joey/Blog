// import React, { Component } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// export default class Write extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: "",
//     };
//   }

//   handleChange = (value) => {
//     this.setState({ value });
//   }; //this is the correct way to handle the change event

//   render() {
//     return (
//       <div className="add">
//         <div className="content">
//           <input type="text" placeholder="Title"></input>
//           <div className="editorContainer">
//             <ReactQuill
//               className="editor"
//               theme="snow"
//               value={this.state.value} //Controlled component
//               onChange={this.handleChange}
//             />
//           </div>
//         </div>

//         <div className="menu">
//           <div className="item">
//             <h1>Publish</h1>
//             <span>
//               <b>Status: </b>Draft
//             </span>
//             <span>
//               <b>Visibility: </b>Public
//             </span>
//             <input style={{ display: "none" }} type="file" id="file"></input>
//             <label className="file" htmlFor="file">
//               Upload Image
//             </label>
//             <div className="buttons">
//               <button>Save as a draft</button>
//               <button>Update</button>
//             </div>
//           </div>

//           <div className="item">
//             <h1>Category</h1>
//             <div className="cat">
//               <input type="radio" name="cat" value="art" id="art"></input>
//               <label htmlFor="art">Art</label>
//             </div>
//             <div className="cat">
//               <input
//                 type="radio"
//                 name="cat"
//                 value="science"
//                 id="science"
//               ></input>
//               <label htmlFor="science">Science</label>
//             </div>
//             <div className="cat">
//               <input
//                 type="radio"
//                 name="cat"
//                 value="technology"
//                 id="technology"
//               ></input>
//               <label htmlFor="technology">Technology</label>
//             </div>
//             <div className="cat">
//               <input type="radio" name="cat" value="cinema" id="cinema"></input>
//               <label htmlFor="cinema">Cinema</label>
//             </div>
//             <div className="cat">
//               <input type="radio" name="cat" value="design" id="design"></input>
//               <label htmlFor="design">Design</label>
//             </div>
//             <div className="cat">
//               <input type="radio" name="cat" value="food" id="food"></input>
//               <label htmlFor="food">Food</label>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import moment from "moment";

class Write extends Component {
  constructor(props) {
    super(props);
    // const state = useLocation().state;
    this.state = {
      value: "",
      title: "",
      file: null,
      cat: "",
    };
    // this.navigate = useNavigate();
  }

  upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", this.state.file);
      const res = await axios.post(
        "http://localhost:3000/api/upload",
        formData
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await this.upload();

    try {
      const { title, value, cat, file } = this.state;
      const { id } = this.props;
      if (id) {
        await axios.put(`http://localhost:3000/api/posts/${id}`, {
          title,
          desc: value,
          cat,
          img: file ? imgUrl : "",
        });
      } else {
        await axios.post(`http://localhost:3000/api/posts`, {
          title,
          desc: value,
          cat,
          img: file ? imgUrl : "",
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        });
      }
      // this.navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { value, title, file, cat } = this.state;
    return (
      <div className="add">
        <div className="content">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <div className="editorContainer">
            <ReactQuill
              className="editor"
              theme="snow"
              value={value}
              onChange={(value) => this.setState({ value })}
            />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <h1>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              name=""
              onChange={(e) => this.setState({ file: e.target.files[0] })}
            />
            <label className="file" htmlFor="file">
              Upload Image
            </label>
            <div className="buttons">
              <button>Save as a draft</button>
              <button onClick={this.handleClick}>Publish</button>
            </div>
          </div>

          <div className="item">
            <h1>Category</h1>
            <div className="cat">
              <input
                type="radio"
                // checked={cat === "art"}
                name="cat"
                value="art"
                id="art"
                onChange={(e) => this.setState({ cat: e.target.value })}
              />
              <label htmlFor="art">Art</label>
            </div>

            <div className="cat">
              <input
                type="radio"
                // checked={cat === "science"}
                name="cat"
                value="science"
                id="science"
                onChange={(e) => this.setState({ cat: e.target.value })}
              ></input>
              <label htmlFor="science">Science</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                // checked={cat === "technology"}
                value="technology"
                onChange={(e) => this.setState({ cat: e.target.value })}
                id="technology"
              ></input>
              <label htmlFor="technology">Technology</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                value="cinema"
                id="cinema"
                onChange={(e) => this.setState({ cat: e.target.value })}
              ></input>

              <label htmlFor="cinema">Cinema</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                value="design"
                id="design"
                onChange={(e) => this.setState({ cat: e.target.value })}
              ></input>
              <label htmlFor="design">Design</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                value="food"
                id="food"
                onChange={(e) => this.setState({ cat: e.target.value })}
              ></input>
              <label htmlFor="food">Food</label>
            </div>

            {/* Add other categories similarly */}
          </div>
        </div>
      </div>
    );
  }
}

export default Write;
