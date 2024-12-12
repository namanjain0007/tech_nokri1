import { NavLink } from "react-router-dom";
// import { useContext } from "react";
// import Context from "../Context/Context";
import "./CSS/Header.css";
import ProfileBtns from "./ProfileBtns";

const NavBar = () => {
  return (
    <>
      <header>
        <div className="navbar-header-div">
          <div className="navbar-image-div">
            <NavLink to="/">
              <img
                style={{ height: "12vh" }}
                src="https://www.technokri.com/assets/img/logo/logo.png"
                alt="Company Logo"
              />
            </NavLink>
          </div>
          <div className="navbar-links-div">
            <div className="navbar-linkss">
              <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/findajob">Find Jobs</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </nav>
            </div>
          </div>
          <ProfileBtns />
        </div>
      </header>
    </>
  );
};

export default NavBar;
