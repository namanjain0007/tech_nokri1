import { useContext } from "react";
import Image from "./pages/Find Jobs/Image";
import "./CSS/FindJobs.css";
import Context from "../Context/Context";
import Courses from "./Courses";
import AvailableJobs from "./AvailableJobs";
import { NavLink } from "react-router-dom";

const FindJobBySearch = () => {
  const { courseVal, availableJobs } = useContext(Context);

  const selectedTechno = () => {
    return availableJobs.filter(
      (item) =>
        courseVal.course === item.technology &&
        courseVal.experience === item.experience
    );
  };
  const filteredJobs = selectedTechno();

  return (
    <>
      <div className="find-jobs-body">
        <Image
          title={
            courseVal.course && courseVal.experience
              ? courseVal.course + " JOBS"
              : "JOBS"
          }
        />
        <div className="technologies-container">
          <div className="courses-container">
            <div className="search-div">
              <Courses classname={"tech"} />
            </div>
            {filteredJobs.length > 0 && courseVal.experience ? (
              <div className="jobs-div">
                <AvailableJobs
                  availJobs={filteredJobs}
                  classname={"available-jobs"}
                />
                <NavLink
                  to="/"
                  className="btn btn-secondary mt-3"
                  style={{
                    backgroundColor: "#fb246a",
                    textTransform: "capitalize",
                    color: "white",
                    cursor: "pointer",
                    display: "inline - block",
                    fontSize: " 14px",
                    fontWeight: "500",
                    letterSpacing: " 1px",
                    lineHeight: "0",
                    marginBottom: "0",
                    padding: "27px 44px",
                    borderRadius: "0px",
                    margin: "10px",
                    // cursor: "pointer",
                    transition: " color 0.4s linear",
                    position: "relative",
                    zIndex: "1",
                    border: "0",
                    overflow: "hidden",
                    // margin: "0",
                  }}
                >
                  <i className="fas fa-arrow-left"></i> Back to Index Page
                </NavLink>
              </div>
            ) : (
              <b>
                <div>
                  <div className="alert alert-warning" role="alert">
                    No jobs posted for your selected criteria.
                  </div>
                  <NavLink
                    to="/"
                    className="btn btn-secondary mt-3"
                    style={{
                      backgroundColor: "#fb246a",
                      textTransform: "capitalize",
                      color: "white",
                      cursor: "pointer",
                      display: "inline - block",
                      fontSize: " 14px",
                      fontWeight: "500",
                      letterSpacing: " 1px",
                      lineHeight: "0",
                      marginBottom: "0",
                      padding: "27px 44px",
                      borderRadius: "0px",
                      margin: "10px",
                      // cursor: "pointer",
                      transition: " color 0.4s linear",
                      position: "relative",
                      zIndex: "1",
                      border: "0",
                      overflow: "hidden",
                      // margin: "0",
                    }}
                  >
                    <i className="fas fa-arrow-left"></i> Back to Index Page
                  </NavLink>
                </div>
              </b>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FindJobBySearch;
