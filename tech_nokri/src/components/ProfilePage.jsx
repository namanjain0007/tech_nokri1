import React, { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";
import { useNavigate, useLocation } from "react-router-dom";
import "./CSS/Profile_page.css"; // Import the CSS file
import axios from "axios";
// import Jobs from "./pages/Find Jobs/Jobs";
// import Cookies from "js-cookie"; // Cookie se token retrieve karne ke liye

const ProfilePage = () => {
  const {
    logInData,
    setIsLoggedIn,
    featuredData,
    setFeaturedData,
    jobs,
    setLogInData,
    totalAppliedJobs,
  } = useContext(Context);
  const [toggleSlidebar, setToggleSlidebar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [check, setCheck] = useState("");

  useEffect(() => {
    async function checkApplied() {
      try {
        const response = await axios.post(
          "https://tech-nokri1.onrender.com/checkJobId",
          { id: featuredData.id,_id:logInData._id },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );  
        // console.log("id",featuredData.id);
        //         console.log("abcd", response.data);

        if (response.data.isDataExists) {
          setCheck(true);
        } else {
          setCheck(false);
        }
        // setTotalAppliedJobs(response.data.len);
      } catch (error) {
        console.log(error);
      }
    }
    if (location.pathname === "/view_moredetails") {
      checkApplied();
    }
  }, [setFeaturedData]);
  return (
    <div className="ProfilePage d-flex">
      {/* Sidebar */}
      <div className="ProfilePage-sidebar">
        <center>
          {/* Profile Picture */}
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
            alt="User Photo"
            onClick={() => navigate("/")}
          />
          <br />
          <p>{logInData.username}</p>

          {/* Edit Profile Button */}
          <button className="ProfilePage-btn ProfilePage-btn-secondary mt-3">
            <i className="fas fa-edit"></i> Edit Profile
          </button>
          <br />
          <br />

          {/* Toggle Details Button */}
          <button
            className="ProfilePage-btn ProfilePage-btn-secondary mt-3"
            onClick={() => setToggleSlidebar(!toggleSlidebar)}
          >
            <i className="fas fa-eye"></i> View Details
          </button>
          <br />
          <br />

          {/* View All Jobs Button */}
          <button
            onClick={() => navigate("/findajob")}
            className="ProfilePage-btn ProfilePage-btn-primary mt-3"
          >
            <i className="fas fa-eye"></i> View All Jobs
          </button>
          <br />
          <br />

          {/* View Applied Jobs Button */}
          <button className="ProfilePage-btn ProfilePage-btn-success mt-3">
            <i className="fas fa-paper-plane"></i> View Applied Jobs
          </button>
          <br />
          <br />

          {/* Logout Button */}
          <button
            className="ProfilePage-btn ProfilePage-btn-danger"
            onClick={() => {
              setIsLoggedIn(false);

              // Cookies.remove("jwt");
              sessionStorage.removeItem("jwt");
              setLogInData({});

              // localStorage.clear(); // Sare stored items ko remove karega

              navigate("/login");
            }}
          >
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </center>
      </div>

      {/* Main Content */}
      <div className="ProfilePage-main-content">
        <div className="ProfilePage-header">
          <h4>Welcome, {logInData.username}</h4>
          <div>
            <span className="ProfilePage-job-count">
              {jobs.length} Jobs Found
            </span>
            <span className="ProfilePage-job-count ProfilePage-job-count-applied">
              {`${totalAppliedJobs} Jobs Applied`}
            </span>
          </div>
        </div>

        {location.pathname.includes("view_moredetails") &&
        Object.values(featuredData).length > 0 ? (
          <div style={{ paddingTop: "60px" }}>
            <div className="ProfilePage-form-container-container mt-5">
              <div className="ProfilePage-form-container-title">
                <h4>{featuredData.title}</h4>
              </div>
              <div className="ProfilePage-form-container-paragraph">
                <p>
                  <b>Company Name:</b> {featuredData.companyName}
                </p>
                <p>
                  <b>HR Name:</b> {featuredData.hrName}
                </p>
                <p>
                  <b>HR Email:</b> <span>{featuredData.hrEmail}</span>
                </p>
                <p>
                  <b>Contact Number:</b> {featuredData.contact}
                </p>
                <p>
                  <b>Category:</b> {featuredData.category}
                </p>
                <p>
                  <b>Experience Required:</b> {featuredData.experience}
                </p>
                <p>
                  <b>Posted Date:</b> {featuredData.posted}
                </p>
                <p>
                  <b>Expiry Date:</b> {featuredData.expiry}
                </p>
                <p>
                  <b>Job Description:</b> {featuredData.description}
                </p>
              </div>

              {/* <button
                className="ProfilePage-form-container-button"
                onClick={() =>
                  navigate(`/jobregistration?job_id=${featuredData.id}`)
                }
              >
                Apply Now
              </button> */}
              {check ? (
                <button
                  disabled
                  style={{ background: "silver", color: "white", width: "8vw" }}
                >
                  {/* Apply Now */}
                  Already applied
                </button>
              ) : (
                <button
                  className="ProfilePage-form-container-button"
                  onClick={() =>
                    navigate(`/jobregistration?job_id=${featuredData.id}`)
                  }
                >
                  Apply Now
                  {/* {btnName} */}
                </button>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* User Details Sidebar */}
      {toggleSlidebar && (
        <div className="ProfilePage-userDetails active">
          <h4>User Details</h4>
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
            height="100"
            width="100"
            alt="User Photo"
            style={{ marginBottom: "10px" }}
          />
          <p>
            <b>Name:</b> {logInData.username}
          </p>
          <p>
            <b>Email:</b> {logInData.email}
          </p>
          <p>
            <b>Mobile:</b> {logInData.mobile}
          </p>
          <p>
            <b>Date of Birth:</b> {logInData.date}
          </p>
          <p>
            <b>Category:</b> {logInData.technology}
          </p>
          <p>
            <b>Experience:</b> {logInData.experience}
          </p>
          <p>
            <b>Type:</b> {logInData.type}
          </p>

          {/* Back to Dashboard Button */}
          <button
            onClick={() => setToggleSlidebar(false)}
            className="ProfilePage-btn ProfilePage-btn-secondary"
            style={{ marginTop: "10px" }}
          >
            <i className="fas fa-arrow-left"></i> Back to Dashboard
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
