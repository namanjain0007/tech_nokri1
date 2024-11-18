import Context from "../../../Context/Context";
import Courses from "../../Courses";
import Jobs from "./Jobs";

import { useContext } from "react";

const Technologies = () => {
  const { technologies } = useContext(Context);

  return (
    <>
      <div className="technologies-container">
        <div className="courses-container">
          <div className="search-div">
            <Courses classname={"tech"} />
          </div>
          <div className="jobs-div">
            <Jobs technologies={technologies} classname={"findjobs"} />
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Technologies;
