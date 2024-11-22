import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Context from "../Context/Context";
import "./CSS/ProfileBtns.css";
import Cookies from "js-cookie"; // Cookie se token retrieve karne ke liye

const ProfileBtns = () => {
  const { isLoggedIn, setIsLoggedIn, logInData, setLogInData } =
    useContext(Context);
  const navigate = useNavigate();
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  return (
    <>
      <div className="navbar-btnss-div">
        <div className="navbar-logreg-div">
          {isLoggedIn ? (
            <div className="profile-dropdown">
              <div
                className="profile-avatar"
                onClick={() => setIsShowDropdown(!isShowDropdown)}
              >
                <img
                  src={logInData.profilePic || "https://via.placeholder.com/50"}
                  alt="nopic"
                />
                <span className="username">{logInData.username}</span>
              </div>
              {isShowDropdown && (
                <div className="profile-options">
                  <NavLink className="profile-link" to="/profile_page">
                    Profile
                  </NavLink>
                  <button
                    className="logout-btn"
                    onClick={() => {
                      setIsLoggedIn(false);
                      // Cookies.remove("jwt");
                      sessionStorage.removeItem("jwt");
                      setLogInData({});
                      // localStorage.clear(); // Sare stored items ko remove karega

                      navigate("/login");
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="navbar-button-container">
              <button className="navbar-btn">
                <NavLink to="/registration_page">Register</NavLink>
              </button>
              <button className="navbar-btn">
                <NavLink to="/login">Login</NavLink>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileBtns;
