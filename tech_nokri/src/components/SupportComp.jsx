import { useNavigate } from "react-router-dom";

const SupportComp = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="support-company-area support-padding-fix">
        <div className="support-container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 writing-part">
              <div className="right-caption">
                <div className="section-tittle section-tittle2">
                  <h2>Many Talented People Are Getting Jobs</h2>
                </div>
                <div className="support-caption">
                  <p className="pera-top">
                    Tech Naukri connects tech professionals with top industry
                    opportunities, offering a streamlined platform for career
                    growth and job discovery. Discover your next role in the
                    tech world with us!
                  </p>
                  <p>
                    Tech Naukri offers a seamless experience for tech
                    professionals seeking new opportunities. Our platform
                    ensures quality connections and efficient job searches,
                    helping you navigate the tech industry with ease. Discover
                    your ideal tech role with us today!
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate("/findajob")}
                    className="support-search-btn btn btn-danger"
                    // style={{ backgroundColor: "#fb246a" }}
                  >
                    <i className="bi bi-search"></i> Search a Job
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 image-part">
              <div className="support-location-img">
                <img
                  src="https://www.technokri.com/assets/img/service/support-img.jpg"
                  alt="Support Image"
                />
                <div className="support-img-cap text-center">
                  <p>Since</p>
                  <span>2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default SupportComp;
