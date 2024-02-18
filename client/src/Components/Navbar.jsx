import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    //const { curreUntUser } = useContext(AuthContext);
    const currentUser = JSON.parse(localStorage.getItem("user"));
    console.log(currentUser);

    const refreshPage = () => {
      this.setState({ count: this.state.count + 1 });
    };

    return (
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          <div className="links">
            <Link className="link" onClick={refreshPage} to="/?cat=art">
              <h6>ART</h6>
            </Link>
            <Link className="link" onClick={refreshPage} to="/?cat=science">
              <h6>SCIENCE</h6>
            </Link>
            <Link className="link" onClick={refreshPage} to="/?cat=technology">
              <h6>TECHNOLOGY</h6>
            </Link>
            <Link className="link" onClick={refreshPage} to="/?cat=cinema">
              <h6>CINEMA</h6>
            </Link>
            <Link className="link" onClick={refreshPage} to="/?cat=design">
              <h6>DESIGN</h6>
            </Link>
            <Link className="link" onClick={refreshPage} to="/?cat=food">
              <h6>FOOD</h6>
            </Link>
            <span>{currentUser?.username}</span>

            <Span user={currentUser} />

            <span className="write">
              <Link className="link" to="/write">
                Write
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

function Span(props) {
  const { logout } = useContext(AuthContext);

  console.log(props.user);

  if (props.user) {
    return <span onClick={logout}>Logout</span>;
  } else {
    return (
      <Link className="link" to="/login">
        Login
      </Link>
    );
  }
}

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../context/authContext";
// import Logo from "../img/logo.png";

// const Navbar = () => {
//   const { currentUser, logout } = useContext(AuthContext);

//   return (
//     <div className="navbar">
//       <div className="container">
//         <div className="logo">
//           <Link to="/">
//             <img src={Logo} alt="" />
//           </Link>
//         </div>
//         <div className="links">
//           <Link className="link" to="/?cat=art">
//             <h6>ART</h6>
//           </Link>
//           <Link className="link" to="/?cat=science">
//             <h6>SCIENCE</h6>
//           </Link>
//           <Link className="link" to="/?cat=technology">
//             <h6>TECHNOLOGY</h6>
//           </Link>
//           <Link className="link" to="/?cat=cinema">
//             <h6>CINEMA</h6>
//           </Link>
//           <Link className="link" to="/?cat=design">
//             <h6>DESIGN</h6>
//           </Link>
//           <Link className="link" to="/?cat=food">
//             <h6>FOOD</h6>
//           </Link>
//           <span>{currentUser?.username}</span>
//           {currentUser ? (
//             <span onClick={logout}>Logout</span>
//           ) : (
//             <Link className="link" to="/login">
//               Login
//             </Link>
//           )}
//           <span className="write">
//             <Link className="link" to="/write">
//               Write
//             </Link>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
