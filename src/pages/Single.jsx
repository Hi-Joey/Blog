import React, { Component } from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../Components/Menu";

export default class Single extends Component {
  render() {
    return (
      <div className="single">
        <div className="content">
          <img src="https://source.unsplash.com/random" alt="image"></img>
          <div className="user">
            <img src="https://source.unsplash.com/random" alt="image"></img>
            <div className="info">
              <span>John</span>
              <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
              <Link to="/write?edit=2">
                <img src={Edit} alt="Edit"></img>
              </Link>
              <img src={Delete} alt="Delete"></img>
            </div>
          </div>
          <h1 className="title">Lorem ipsum dolor sit amet.</h1>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            volutpat, nulla tempor vestibulum facilisis, nunc lorem accumsan
            lorem, ut congue tortor nibh ut enim. In vel vehicula ante.
            Curabitur eget ultricies magna, id posuere dolor. Suspendisse ut
            ligula vitae lorem iaculis molestie. Suspendisse molestie lacus eget
            tincidunt sodales. Nunc sed eleifend dui, sed condimentum nibh.
            Suspendisse at ipsum malesuada velit ultrices ultricies in in nulla.
            Etiam ut malesuada purus. Fusce pharetra dui ut ullamcorper dictum.
            Aliquam erat volutpat. Sed eu efficitur augue. lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Aenean volutpat, nulla tempor
            vestibulum facilisis, nunc lorem accumsan lorem, ut congue tortor
            nibh ut enim. In vel vehicula ante. Curabitur eget ultricies magna,
            id posuere dolor.
            <br />
            <br />
            Suspendisse ut ligula vitae lorem iaculis molestie. Suspendisse
            molestie lacus eget tincidunt sodales. Nunc sed eleifend dui, sed
            condimentum nibh. Suspendisse at ipsum malesuada velit ultrices
            ultricies in in nulla. Etiam ut malesuada purus. Fusce pharetra dui
            ut ullamcorper dictum. Aliquam erat volutpat. Sed eu efficitur
            augue. lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean volutpat, nulla tempor vestibulum facilisis, nunc lorem
            accumsan lorem, ut congue tortor nibh ut enim. In vel vehicula ante.
            Curabitur eget ultricies magna, id posuere dolor. Suspendisse ut
            ligula vitae lorem iaculis molestie. Suspendisse molestie lacus eget
            tincidunt sodales. Nunc sed eleifend dui, sed condimentum nibh.
            Suspendisse at ipsum malesuada velit ultrices ultricies in in nulla.
            Etiam ut malesuada purus. Fusce pharetra dui ut ullamcorper dictum.
            Aliquam erat volutpat. Sed eu efficitur augue. lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Aenean volutpat, nulla tempor
            vestibulum facilisis, nunc lorem accumsan lorem, ut congue tortor
            nibh ut enim. In vel vehicula ante. Curabitur eget ultricies magna,
            id posuere dolor. Suspendisse ut ligula vitae lorem iaculis
            molestie. Suspendisse molestie lacus eget tincidunt sodales. Nunc
            sed eleifend dui, sed condimentum nibh. Suspendisse at ipsum
            malesuada velit ultrices ultricies in in nulla. Etiam ut malesuada
            purus. Fusce pharetra dui ut ullamcorper dictum. Aliquam erat
            volutpat. Sed eu efficitur augue.
          </p>
        </div>
        <Menu />
      </div>
    );
  }
}
