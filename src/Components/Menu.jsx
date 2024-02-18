import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    const posts = [
      {
        id: 1,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat, nulla tempor vestibulum facilisis, nunc lorem accumsan lorem, ut congue tortor nibh ut enim. In vel vehicula ante. Curabitur eget ultricies magna, id posuere dolor. Suspendisse ut ligula vitae lorem iaculis molestie. Suspendisse molestie lacus eget tincidunt sodales. Nunc sed eleifend dui, sed condimentum nibh. Suspendisse at ipsum malesuada velit ultrices ultricies in in nulla. Etiam ut malesuada purus. Fusce pharetra dui ut ullamcorper dictum. Aliquam erat volutpat. Sed eu efficitur augue.",
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat, nulla tempor vestibulum facilisis, nunc lorem accumsan lorem, ut congue tortor nibh ut enim. In vel vehicula ante. Curabitur eget ultricies magna, id posuere dolor. Suspendisse ut ligula vitae lorem iaculis molestie. Suspendisse molestie lacus eget tincidunt sodales. Nunc sed eleifend dui, sed condimentum nibh. Suspendisse at ipsum malesuada velit ultrices ultricies in in nulla. Etiam ut malesuada purus. Fusce pharetra dui ut ullamcorper dictum. Aliquam erat volutpat. Sed eu efficitur augue.",
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.rem iaculis molestie.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat, nulla tempor vestibulum facilisis, nunc lorem accumsan lorem, ut congue tortor nibh ut enim. In vel vehicula ante. Curabitur eget ultricies magna, id posuere dolor. Suspendisse ut ligula vitae lorem iaculis molestie. Suspendisse molestie lacus eget tincidunt sodales. Nunc sed eleifend dui, sed condimentum nibh. Suspendisse at ipsum malesuada velit ultrices ultricies in in nulla. Etiam ut malesuada purus. Fusce pharetra dui ut ullamcorper dictum. Aliquam erat volutpat. Sed eu efficitur augue.",
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat, nulla tempor vestibulum facilisis, nunc lorem accumsan lorem, ut congue tortor nibh ut enim. In vel vehicula ante. Curabitur eget ultricies magna, id posuere dolor. Suspendisse ut ligula vitae lorem iaculis molestie. Suspendisse molestie lacus eget tincidunt sodales. Nunc sed eleifend dui, sed condimentum nibh. Suspendisse at ipsum malesuada velit ultrices ultricies in in nulla. Etiam ut malesuada purus. Fusce pharetra dui ut ullamcorper dictum. Aliquam erat volutpat. Sed eu efficitur augue.",
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat, nulla tempor vestibulum facilisis, nunc lorem accumsan lorem, ut congue tortor nibh ut enim. In vel vehicula ante. Curabitur eget ultricies magna, id posuere dolor. Suspendisse ut ligula vitae lorem iaculis molestie. Suspendisse molestie lacus eget tincidunt sodales. Nunc sed eleifend dui, sed condimentum nibh. Suspendisse at ipsum malesuada velit ultrices ultricies in in nulla. Etiam ut malesuada purus. Fusce pharetra dui ut ullamcorper dictum. Aliquam erat volutpat. Sed eu efficitur augue.",
        img: "https://source.unsplash.com/random",
      },
      {
        id: 6,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat, nulla tempor vestibulum facilisis, nunc lorem accumsan lorem, ut congue tortor nibh ut enim. In vel vehicula ante. Curabitur eget ultricies magna, id posuere dolor. Suspendisse ut ligula vitae lorem iaculis molestie. Suspendisse molestie lacus eget tincidunt sodales. Nunc sed eleifend dui, sed condimentum nibh. Suspendisse at ipsum malesuada velit ultrices ultricies in in nulla. Etiam ut malesuada purus. Fusce pharetra dui ut ullamcorper dictum. Aliquam erat volutpat. Sed eu efficitur augue.",
        img: "https://source.unsplash.com/random",
      },
    ];
    return (
      <div className="menu">
        <h1>Other posts you may like</h1>
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <img src={post.img} alt="post image"></img>
              <h2>{post.title}</h2>
              <button>Read More</button>
            </div>
          );
        })}
      </div>
    );
  }
}
