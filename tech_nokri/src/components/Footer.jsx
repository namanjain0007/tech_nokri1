import "./CSS/Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/* Footer Start */}
      <div className="footer-area footer-bg footer-padding">
        <div className="footer-row d-flex justify-content-between">
          <div className="footer-col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="footer-single-footer-caption">
              <div className="footer-footer-tittle">
                <h4>About Us</h4>
                <div className="footer-footer-pera">
                  <p>
                    technokri.com is a leading platform for tech job seekers and
                    employers, specializing in connecting talent with
                    opportunities <br /> in the tech industry.&nbsp; It offers a
                    user-friendly interface for &nbsp; job <br /> listings,
                    posting vacancies, and accessing resources tailored to
                    technology professionals. With its focus on tech-centric
                    careers, technokri.com streamlines the job search process
                    for both candidates and companies.
                  </p>
                </div>
              </div>
              <div className="footer-footer-logo mb-20">
                <NavLink to="/">
                  <img
                    src="https://www.technokri.com/assets/img/logo/logo.png"
                    alt=""
                  />
                </NavLink>
              </div>
            </div>
          </div>

          <div className="footer-col-xl-3 col-lg-3 col-md-4 col-sm-5">
            <div className="footer-single-footer-caption">
              <div className="footer-footer-tittle">
                <h4>
                  <b>Contact Number</b>
                </h4>
                <ul>
                  <li>
                    <a href="tel:07805063968">
                      <b></b>
                      <br />
                      078050-63968&nbsp; &nbsp; 0731-4069788
                    </a>
                  </li>
                </ul>
                <br />
                <h4>
                  <b>Contact Info</b>
                </h4>
                <ul>
                  <li>
                    <p>
                      <b> Address:</b> M6 First Floor, Kanchan Sagar Near
                      Industry House, Palasia A.B Road Indore
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-col-xl-3 col-lg-3 col-md-4 col-sm-5">
            <div className="footer-single-footer-caption">
              <div className="footer-footer-tittle">
                <h4>
                  <b>Important Link</b>
                </h4>
                <ul>
                  <li>
                    <NavLink to="/">
                      <b>HOME page</b>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/findajob">
                      <b>Find job</b>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">
                      <b>ABOUT</b>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">
                      <b>Contact</b>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">
                      <b>LOGIN</b>
                    </NavLink>
                  </li>
                </ul>
                <br />
                <br />
                <div className="footer-footer-form">
                  <form className="footer-subscribe_form relative mail_part">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="footer-placeholder hide-on-focus"
                    />
                    <div className="footer-form-icon">
                      <button className="footer-email_icon newsletter-submit button-contactForm">
                        <img
                          src="https://www.technokri.com/assets/img/icon/form.png"
                          alt="Send"
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-row footer-wejed justify-content-between">
          <div className="footer-col-xl-3 col-lg-3 col-md-4 col-sm-6"></div>
          <div className="footer-col-xl-3 col-lg-3 col-md-4 col-sm-5"></div>
          <div className="footer-col-xl-3 col-lg-3 col-md-4 col-sm-5"></div>
          <div className="footer-col-xl-3 col-lg-3 col-md-4 col-sm-5"></div>
        </div>
      </div>
      <div className="footer-footer-bottom-area footer-bg">
        <div className="footer-container">
          <div className="footer-footer-border">
            <div className="footer-row d-flex justify-content-between align-items-center">
              <div className="footer-col-xl-10 col-lg-10">
                <div className="footer-footer-copy-right">
                  <p style={{ color: "cornflowerblue" }}>
                    ©{new Date().getFullYear()} All Rights Reserved. Developed
                    by Kangaroosoftware.net
                    <i className="fa-solid fa-heart"></i> by
                    {/* <a
                      href="https://kangaroosoftware.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                    /> */}
                  </p>
                </div>
              </div>
              <div className="footer-col-xl-2 col-lg-2">
                <div className="footer-footer-social f-right">
                  <a href="https://www.facebook.com/shivaconceptsolutionindore/">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="https://www.youtube.com/shivaconceptsolution">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/shiva-concept-solution/?originalSubdomain=in">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/shivaconceptsolution/">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </footer>
  );
};

export default Footer;
