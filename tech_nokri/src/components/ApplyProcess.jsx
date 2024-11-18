import "./CSS/ApplyProcess.css";
import { NavLink, useNavigate } from "react-router-dom";

const ApplyProcess = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="apply-process-area apply-bg pt-150 pb-150">
        <div className="apply-process-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle white-text text-center">
                <span>Apply process</span>
                <h2> How it works</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-process text-center mb-30">
                <NavLink to="/findajob">
                  {/* <div className="process-ion">
                    <span className="flaticon-search"></span>
                  </div> */}
                  <div className="process-cap">
                    <h5>1. Search a job</h5>
                    <p>
                      Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                      tempor incididunt ut laborea.
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-process text-center mb-30">
                <NavLink to="/findajob">
                  {/* <div className="process-ion">
                    <span className="flaticon-curriculum-vitae"></span>
                  </div> */}
                  <div className="process-cap">
                    <h5>2. Apply for job</h5>
                    <p>
                      Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                      tempor incididunt ut laborea.
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-process text-center mb-30">
                <NavLink to="/findajob">
                  {/* <div className="process-ion">
                    <span className="flaticon-tour"></span>
                  </div> */}
                  <div className="process-cap">
                    <h5>3. Get your job</h5>
                    <p>
                      Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                      tempor incididunt ut laborea.
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyProcess;
