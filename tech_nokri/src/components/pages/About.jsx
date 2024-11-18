import Image from "./Find Jobs/Image";
import "../CSS/About.css";
import ApplyProcess from "../ApplyProcess";
import Testimonial from "../Testimonial";
import OnlineCv from "./Home/OnlineCv";
import Blog from "../Blog";
import SupportComp from "../SupportComp";

const About = () => {
  return (
    <>
      <div>
        <Image title={"About Us"} />
      </div>
      {/* Support Company Start */}
      <div>
        <SupportComp />
      </div>
      <div>
        <ApplyProcess />
      </div>
      <div>
        <Testimonial />
      </div>
      {/* Online CV Section starts here */}
      <div>
        <OnlineCv
          title={"Make a Difference with Your Online Resume!"}
          path={"/pagenotfound"}
          btnName={"UPLOAD YOUR CV"}
        />
      </div>
      {/*  Blog Start from here */}
      <div>
        <Blog />
      </div>
    </>
  );
};

export default About;
