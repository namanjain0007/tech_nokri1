import { NavLink, useNavigate } from "react-router-dom";
import "./CSS/FeaturedJobs.css";
import { useContext } from "react";
import Context from "../Context/Context";


const notLogInJobs = [
  {
    id: 132,
    title: "Dot Net Developer",
    company: "Synsoft Global",
    experience: 2,
    daysAgo: 0,
    image:
      "https://www.technokri.com/admin/uploads/ffc7553f60708a6d8e91c5e2dcc032f6.jpg",
  },
  {
    id: 131,
    title: "MERN Developer",
    company: "Task Source Private Limited",
    experience: 2,
    daysAgo: 0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1otOsetUJ7zHq1QBQo5oDjLIfZru8XubAQ&s",
  },
  {
    id: 130,
    title: "Java Developer",
    company: "Tech Innovations",
    experience: 3,
    daysAgo: 2,
    image:
      "https://www.technokri.com/admin/uploads/f59043560825639a01d61c721fe4459a.jpg",
  },
  {
    id: 129,
    title: "Frontend Developer",
    company: "Creative Minds",
    experience: 1,
    daysAgo: 1,
    image:
      "https://img.freepik.com/free-vector/frontend-developer-typographic-header-website-interface-design-improvement-web-page-programming-coding-testing-it-profession-isolated-flat-vector-illustration_613284-304.jpg",
  },
  {
    id: 128,
    title: "Python Developer",
    company: "Data Solutions Ltd",
    experience: 4,
    daysAgo: 5,
    image:
      "https://www.technokri.com/admin/uploads/8bd78d175560f64ee7ac0b5aafbfe432.jpg",
  },
  // Add other jobs here...
];

const FeaturedJobs = () => {
  const navigate = useNavigate();
  const { setFeaturedData, isLoggedIn, jobs } = useContext(Context);

  function handleJobReq(id) {
    const product = jobs.find((item) => item.id === id);
    setFeaturedData(product);
    // console.log(product);

    // console.log("nj beta", id);
    const value = `job_id=${id}`;
    navigate(`view_moredetails?${value}`);
  }

  return isLoggedIn ? (
    <section className="featuredjob-job-area featuredjob-feature-padding">
      <div className="featuredjob-container">
        {/* Section Tittle */}
        <div className="featuredjob-row">
          <div className="featuredjob-col-lg-12">
            <div className="featuredjob-section-tittle text-center">
              <span>Recent Job</span>
              <h2>Featured Jobs</h2>
            </div>
          </div>
        </div>
        <div className="featuredjob-row featuredjob-justify-content-center">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="featuredjob-col-12 featuredjob-col-md-4 featuredjob-mb-4"
            >
              <a
                // href={`view_moredeteals.php?job_id=${job.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="featuredjob-job-container">
                  {/* Company Image Section */}
                  <div className="featuredjob-company-img">
                    <img
                      src={
                        "https://www.technokri.com/admin/uploads/98279982efd29ba993f37e030318597e.jpg"
                      }
                      alt="Company Image"
                      className="featuredjob-featured_job_first_image"
                    />
                  </div>

                  {/* Job Details Section */}
                  <div className="featuredjob-job-details">
                    <h4>{job.title}</h4>
                    <ul>
                      <li>{job.companyName}</li>
                      <li>
                        <i className="fas fa-briefcase"></i> {job.experience}
                      </li>
                      <li>{job.posted}</li>
                    </ul>
                  </div>

                  {/* Apply Button Section */}
                  <div
                    className="featuredjob-job-link"
                    onClick={() => handleJobReq(job.id)}
                  >
                    <div className="featuredjob-btn featuredjob-head-btn1 featuredjob-view-details-button">
                      <i className="fas fa-eye"></i> View Details & Apply
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : (
    <section className="featured-job-area-notlogin feature-padding-notlogin">
      <div className="container-notlogin">
        <div className="section-tittle-notlogin text-center-notlogin">
          <span>Recent Job</span>
          <h2>Featured Jobs</h2>
        </div>

        <div className="row-notlogin justify-content-center-notlogin">
          {notLogInJobs.map((job) => (
            <div
              key={job.id}
              className="col-12-notlogin col-md-4-notlogin mb-4-notlogin"
            >
              <NavLink to={"/login"} className="job-link-notlogin">
                <div className="job-container-notlogin">
                  <div className="company-img-notlogin">
                    <img
                      src={job.image}
                      alt={`${job.company} Logo`}
                      className="featured_job_first_image-notlogin"
                    />
                  </div>
                  <div className="job-details-notlogin">
                    <h4>{job.title}</h4>
                    <ul>
                      <li>{job.company}</li>
                      <li>
                        <i className="fas fa-briefcase"></i> {job.experience}
                      </li>
                      <li>{job.daysAgo} days ago</li>
                    </ul>
                  </div>
                  <div className="apply-button-notlogin">
                    <span className="view-details-button-notlogin">
                      <i className="fas fa-eye"></i> View Details &amp; Apply
                    </span>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
