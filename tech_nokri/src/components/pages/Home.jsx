import ApplyProcess from "../ApplyProcess";
import Blog from "../Blog";
import Courses from "../Courses";
import "../CSS/Home.css";
import FeaturedJobs from "../FeaturedJobs";
import SupportComp from "../SupportComp";
import Testimonial from "../Testimonial";
import OnlineCv from "./Home/OnlineCv";

import Technologies from "./Home/Technologies";

const Home = () => {
  return (
    <>
      <div className="container">
        <section className="hero-section">
          <div className="hero-caption">
            <h1>Find The Most Exciting Tech Jobs</h1>
          </div>
          <Courses classname={"home"} />
        </section>
        {/* Hero Section Ends here */}
      </div>
      {/* Technologies Section Starts here */}
      <div>
        <Technologies />
      </div>
      {/* Technologies Section ends here */}
      {/* Online CV Area Start  */}
      <div>
        <OnlineCv
          title={"Enhance Your Career with Our Online Job Applications!"}
          path={"/findajob"}
          btnName={"FIND A JOB"}
        />
      </div>
      <div>
        <FeaturedJobs />
      </div>
      <div>
        <ApplyProcess />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <SupportComp />
      </div>
      <div>
        <Blog />
      </div>
    </>
  );
};

export default Home;
