import { useContext, useState } from "react";
import "../../CSS/Jobs.css";
import Context from "../../../Context/Context";
import { useNavigate } from "react-router-dom";
import FindJobModal from "../../FindJobModal";

const Jobs = ({ classname, technologies }) => {
  const { isLoggedIn, jobs, setFeaturedData } = useContext(Context);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  // function getData() {}

  function handleClick(availability, id, tech) {
    if (isLoggedIn) {
      if (availability === "yes") {
        const job = jobs.find(
          (item) => item.technology === tech.technology
          // "PYTHON DEVELOPER" || {}
        );
        // console.log("ayush", job);
        setFeaturedData(job);
        navigate(`/view_moredetails?job_id=${id}`);
      } else {
        navigate("/payment_gateway");
      }
    } else {
      navigate("/login");
    }
    // !isLoggedIn
    //   ? navigate("/login")
    //   : availability === "yes"
    //   ? navigate("/profile_page")
    //   : navigate("/payment_gateway");
  }
  function handleModal(item) {
    setSelectedJob(item);
    setShowModal(!showModal);
  }
  return (
    <>
      {technologies.map((item, i) => (
        <div key={i} className={`${classname}-row`}>
          <div className="col-md-12">
            <div className={`${classname}-job-post`}>
              <div className={`${classname}-job-info`}>
                <b>
                  <h5 className={`${classname}-job-title`}>
                    Profile :- <b>{item.profile}</b>
                    {/* Profile :- <b> JAVA DEVELOPER</b> */}
                  </h5>
                </b>
                <p className={`${classname}-job-details`}>
                  <strong> Technology :- </strong> {item.technology}
                  {/* <strong> Technology :- </strong> JAVA */}
                </p>
                <p className={`${classname}-job-details`}>
                  <b>DESCRIPTION:-</b>
                  {item.describtion}
                </p>
                <div className={`${classname}-job-description`}></div>
              </div>
              {isLoggedIn ? (
                <div className={`${classname}-btn-container`}>
                  <button
                    className="btn btn-info btn-sm view-job"
                    onClick={() =>
                      handleClick(item.availability, item.id, item)
                    }
                  >
                    <i className="fas fa-eye"></i> View Details & Apply
                  </button>
                </div>
              ) : (
                <div className={`${classname}-btn-container`}>
                  <button
                    className="btn btn-info btn-sm view-job"
                    onClick={() => handleModal(item)}
                  >
                    <i className="fas fa-eye"></i> View
                  </button>
                  <button
                    onClick={() => navigate("/login")}
                    // onClick={() => console.log("item", item)}
                    className="btn btn-primary btn-sm apply-job"
                  >
                    <i className="fas fa-paper-plane"></i> Apply
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      {showModal ? (
        <FindJobModal setShowModal={setShowModal} selectedJob={selectedJob} />
      ) : (
        ""
      )}
    </>
  );
};

export default Jobs;
