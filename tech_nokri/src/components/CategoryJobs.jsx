import { useContext } from "react";
import Context from "../Context/Context";
import Image from "./pages/Find Jobs/Image";
import AvailableJobs from "./AvailableJobs";
import { NavLink } from "react-router-dom";

const CategoryJobs = () => {
  const { catTechName, availableJobs } = useContext(Context);
  // console.log("catTechName", catTechName);
  const selectedTechno = () => {
    // console.log("hello");
    return availableJobs.filter(
      (item) =>
        catTechName.toLowerCase().trim() ===
        item.technology.toLowerCase().trim()
    );
  };
  const filteredJobs = selectedTechno();
  // console.log("avail", filteredJobs);
  return (
    <>
      <div className="find-jobs-body">
        <Image title={catTechName + " JOBS POSTS"} />

        <div className="courses-container">
          {filteredJobs.length > 0 ? (
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
    </>
  );
};

export default CategoryJobs;
