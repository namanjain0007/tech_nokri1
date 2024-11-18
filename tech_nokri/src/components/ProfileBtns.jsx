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

// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import Context from "../Context/Context";
// import "./CSS/ProfilePage.css";

// const ProfilePage = () => {
//   const { logInData, setIsLoggedIn } = useContext(Context);
//   const navigate = useNavigate();

//   const user = {
//     username: logInData.username || "Not Provided",
//     email: logInData.email || "Not Provided",
//     mobile: logInData.mobile || "Not Provided",
//     password: logInData.password || "Not Provided",
//     confirmPassword: logInData.confirmPassword || "Not Provided",
//     experience: logInData.experience || "Not Provided",
//     technology: logInData.technology || "Not Provided",
//     type: logInData.type || "Not Provided",
//     date: logInData.date || "Not Provided",
//     branch: logInData.branch || "Not Provided",
//     courseList: logInData.courseList || "Not Provided",
//     photo: logInData.photo || "https://via.placeholder.com/150",
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   return (
//     <div classNameName="profile-page-container">
//       <h1 classNameName="profile-heading">Profile Page</h1>
//       <div classNameName="profile-card">
//         <div classNameName="profile-image">
//           <img src={user.photo} alt="User Profile" />
//         </div>

//         <div classNameName="profile-header">
//           <h2 classNameName="profile-header-title">{user.username}</h2>
//           <p classNameName="profile-header-subtitle">({user.type})</p>
//         </div>

//         <div classNameName="profile-body">
//           <div classNameName="profile-body-item profile-body-item-email">
//             <strong>Email:</strong>
//             <span>{user.email}</span>
//           </div>
//           <div classNameName="profile-body-item profile-body-item-mobile">
//             <strong>Mobile:</strong>
//             <span>{user.mobile}</span>
//           </div>
//           <div classNameName="profile-body-item profile-body-item-experience">
//             <strong>Experience:</strong>
//             <span>{user.experience}</span>
//           </div>
//           <div classNameName="profile-body-item profile-body-item-technology">
//             <strong>Technology:</strong>
//             <span>{user.technology}</span>
//           </div>
//           <div classNameName="profile-body-item profile-body-item-branch">
//             <strong>Branch:</strong>
//             <span>{user.branch}</span>
//           </div>
//           <div classNameName="profile-body-item profile-body-item-course">
//             <strong>Course List:</strong>
//             <span>{user.courseList}</span>
//           </div>
//           <div classNameName="profile-body-item profile-body-item-date">
//             <strong>Registration Date:</strong>
//             <span>{user.date}</span>
//           </div>
//         </div>

//         <div classNameName="profile-logout-button">
//           <button classNameName="profile-logout-btn" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

/* Profile Page Styles */
// .profile-page-container {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   background: linear-gradient(135deg, #e09, #ff9a9e);
//   min-height: 100vh;
//   font-family: "Arial", sans-serif;
// }

// h1.profile-heading {
//   color: #fff;
//   font-size: 2.5rem;
//   margin-bottom: 20px;
//   animation: fadeIn 1s ease-in-out;
// }

// /* Profile Card Styles */
// .profile-card {
//   background: white;
//   border-radius: 15px;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
//   width: 100%;
//   max-width: 700px;
//   padding: 30px;
//   transform: translateY(30px);
//   animation: slideUp 0.5s ease-in-out;
//   transition: all 0.3s ease;
// }

// .profile-card:hover {
//   transform: translateY(0);
//   box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
// }

// /* Profile Header Styles */
// .profile-header {
//   text-align: center;
//   border-bottom: 2px solid #f1f1f1;
//   padding-bottom: 20px;
//   margin-bottom: 20px;
// }

// .profile-header-title {
//   font-size: 2.2rem;
//   color: #34495e;
//   transition: color 0.3s ease;
// }

// .profile-header-subtitle {
//   font-size: 1.1rem;
//   color: #7f8c8d;
//   font-style: italic;
// }

// .profile-header-title:hover {
//   color: #e74c3c;
// }

// /* Profile Body Styling with Colored Data */
// .profile-body {
//   font-size: 1.1rem;
// }

// .profile-body-item {
//   font-size: 1.2rem;
//   margin: 10px 0;
//   padding: 10px;
//   background-color: #f7f9fc;
//   border-radius: 8px;
//   transition: background-color 0.3s ease, color 0.3s ease;
//   position: relative;
// }

// .profile-body-item strong {
//   font-weight: bold;
//   color: #2c3e50;
// }

// /* Colorful User Data */
// .profile-body-item span {
//   font-weight: bold;
//   font-size: 1.1rem;
//   padding: 2px 10px;
//   border-radius: 5px;
//   color: white;
//   transition: transform 0.3s ease;
// }

// .profile-body-item-email span {
//   background-color: #3498db; /* Blue for email */
// }

// .profile-body-item-mobile span {
//   background-color: #e67e22; /* Orange for mobile */
// }

// .profile-body-item-experience span {
//   background-color: #9b59b6; /* Purple for experience */
// }

// .profile-body-item-technology span {
//   background-color: #1abc9c; /* Green for technology */
// }

// .profile-body-item-branch span {
//   background-color: #f39c12; /* Yellow for branch */
// }

// .profile-body-item-course span {
//   background-color: #e74c3c; /* Red for course list */
// }

// .profile-body-item-date span {
//   background-color: #2ecc71; /* Light green for date */
// }

// /* Hover effects on user data */
// .profile-body-item:hover span {
//   transform: scale(1.05);
//   box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
// }

// /* Logout Button */
// .profile-logout-button {
//   margin-top: 30px;
//   text-align: center;
// }

// .profile-logout-btn {
//   padding: 12px 25px;
//   font-size: 1.2rem;
//   color: white;
//   background-color: #e74c3c;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   font-family: "Arial", sans-serif;
//   text-transform: uppercase;
//   font-weight: bold;
// }

// .profile-logout-btn:hover {
//   background-color: #c0392b;
// }

// .profile-logout-btn:focus {
//   outline: none;
// }

// /* Animations */
// @keyframes fadeIn {
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// }

// @keyframes slideUp {
//   from {
//     transform: translateY(50px);
//     opacity: 0;
//   }
//   to {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }
