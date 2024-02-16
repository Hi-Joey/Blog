import React, { Component } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./style.scss";

// Use nested routes to render the Header and Footer components in the Layout component.
class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post/:id", element: <Single /> },
      { path: "/write", element: <Write /> },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/Home",
    element: <Home />,
  },
]);

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    );
  }
}
