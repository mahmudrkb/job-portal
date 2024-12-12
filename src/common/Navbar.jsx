import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import AuthProvider from "../context/AuthProvider";
import logo from "../assets/team/icone - Copy.png"

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);

  const handleLogout=()=>{
    userLogout()
    .then(result=>{
        console.log("log Out Successfully")
    }).catch(error=>{
        console.log(error.message)
    })
  }


  const Links = (
    <>
      <li>
        <NavLink to={"/"}>Homer</NavLink>
      </li>

      <li>
        <NavLink>Item 3</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <a className=" font-semibold flex content-center text-xl"> <img className="w-10" src={logo} alt="" /> JOB PORTAL</a>
          <h1>{user?.email}</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              {" "}
              <Link onClick={handleLogout} className="btn">
                Log Out{" "}
              </Link>
            </>
          ) : (
            <>
              {" "}
              <Link to={"register"} className="btn">
                Register{" "}
              </Link>
              <Link to={"signin"} className="btn">
                Sign In{" "}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
