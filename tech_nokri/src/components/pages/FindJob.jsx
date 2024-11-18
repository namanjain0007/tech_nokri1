import "../CSS/FindJobs.css";
import Image from "./Find Jobs/Image";

import Technologies from "./Find Jobs/Technologies";
const FindJob = () => {
  return (
    <div className="find-jobs-body">
      <Image title={"Job Post"} />
      <Technologies />
    </div>
  );
};

export default FindJob;
