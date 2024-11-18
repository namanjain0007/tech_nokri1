import { NavLink, useNavigate } from "react-router-dom";
import "./CSS/FeaturedJobs.css";
import { useContext } from "react";
import Context from "../Context/Context";

// const jobs = [
//   {
//     id: 76,
//     companyImage: "admin/uploads/42ca9f8619fa3ce71ea7d230b721a2dc.jpg",
//     title: "FLUTTER DEVELOPER",
//     hrName: "Dev Sharma",
//     hrEmail: "dev77@gmail.com",
//     contact: "9827064110",
//     category: "MOBILE APP DEVELOPMENT",
//     description:
//       "No Bond Policy, 5 Days Working, Excellent Working Environment",
//     expiry: "2024-08-31",
//     companyName: "CLOUDWAPP TECHNOLOGIES",
//     experience: "2",
//     posted: "23 days ago",
//   },
//   {
//     id: 75,
//     companyImage: "admin/uploads/98279982efd29ba993f37e030318597e.jpg",
//     title: "MERN DEVELOPER",
//     companyName: "SOFTGRID",
//     hrName: "Shweta Sharma",
//     hrEmail: "shweta.sharma@softgrid.com",
//     contact: "9823456789",
//     category: "MERN STACK",
//     description: "Flexible Working Hours, Great Team Environment",
//     expiry: "2024-09-01",
//     experience: "3",
//     posted: "23 days ago",
//   },
//   {
//     id: 74,
//     companyImage: "admin/uploads/8bd78d175560f64ee7ac0b5aafbfe432.jpg",
//     title: "PYTHON DEVELOPER",
//     hrName: "Ravi Singh",
//     hrEmail: "ravi.singh@bluecursor.com",
//     contact: "9801234567",
//     category: "DATA SCIENCE",
//     description: "Growth-Oriented Role, 5 Days Working",
//     expiry: "2024-08-29",
//     companyName: "BLUECURSOR INFOTECH PVT. LTD.",
//     experience: "4",
//     posted: "20 days ago",
//   },
//   {
//     id: 73,
//     companyImage: "admin/uploads/4c8bac6c244a97dcebd9faa21eab428f.jpg",
//     title: "SALESFORCE DEVELOPER",
//     hrName: "Amit Roy",
//     hrEmail: "amit.roy@omniforce.com",
//     contact: "9845671234",
//     category: "CRM DEVELOPMENT",
//     description: "Friendly Environment, Competitive Salary",
//     expiry: "2024-09-15",
//     companyName: "OMNIFORCE TECHNOLOGIES",
//     experience: "2",
//     posted: "18 days ago",
//   },
//   {
//     id: 72,
//     companyImage: "admin/uploads/26d3cd8b9a59a1565d2e2b95c0f80f1d.png",
//     title: "REACT JS DEVELOPER",
//     companyName: "PIXEL TECH",
//     hrName: "Priya Kapoor",
//     hrEmail: "priya.kapoor@pixeltech.com",
//     contact: "9876543210",
//     category: "FRONTEND DEVELOPMENT",
//     description: "5 Days Working, Learning Opportunities",
//     expiry: "2024-09-10",
//     experience: "0",
//     posted: "22 days ago",
//   },
//   {
//     id: 71,
//     companyImage: "admin/uploads/1234abc.jpg",
//     title: "JAVA DEVELOPER",
//     hrName: "Meena Gupta",
//     hrEmail: "meena.gupta@techcode.com",
//     contact: "9812345678",
//     category: "BACKEND DEVELOPMENT",
//     description: "Hybrid Work Model, Team Building Activities",
//     expiry: "2024-09-05",
//     companyName: "TECHCODE SOLUTIONS",
//     experience: "3",
//     posted: "15 days ago",
//   },
//   {
//     id: 70,
//     companyImage: "admin/uploads/5678def.jpg",
//     title: "DEVOPS ENGINEER",
//     hrName: "Rahul Khanna",
//     hrEmail: "rahul.khanna@devcorp.com",
//     contact: "9823456780",
//     category: "DEVOPS",
//     description: "Performance Bonus, Dynamic Work Environment",
//     expiry: "2024-09-20",
//     companyName: "DEVCORP",
//     experience: "1",
//     posted: "10 days ago",
//   },
//   {
//     id: 69,
//     companyImage: "admin/uploads/9101ghi.jpg",
//     title: "ANGULAR DEVELOPER",
//     hrName: "Sunita Rao",
//     hrEmail: "sunita.rao@webdynamics.com",
//     contact: "9876504321",
//     category: "FRONTEND DEVELOPMENT",
//     description: "Competitive Salary, Growth-Oriented Team",
//     expiry: "2024-09-12",
//     companyName: "WEB DYNAMICS",
//     experience: "2",
//     posted: "12 days ago",
//   },
//   {
//     id: 68,
//     companyImage: "admin/uploads/1112jkl.jpg",
//     title: "NODE.JS DEVELOPER",
//     hrName: "Kunal Sharma",
//     hrEmail: "kunal.sharma@backendhub.com",
//     contact: "9845678912",
//     category: "BACKEND DEVELOPMENT",
//     description: "Great Team, Flexible Working Hours",
//     expiry: "2024-09-25",
//     companyName: "BACKEND HUB",
//     experience: "2",
//     posted: "8 days ago",
//   },
// ];
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
