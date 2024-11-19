import "./CSS/Blog.css";
import { NavLink } from "react-router-dom";


const Blog = () => {
  return (
    <>
      <div className="blog-home-blog-area blog-h-padding;">
        <div className="blog-container">
          <div className="blog-row">
            <div className="blog-col-lg-12">
              <div className="blog-section-tittle text-center">
                <span>Our latest blog</span>
                <h2>Our recent news</h2>
              </div>
            </div>
          </div>
          <div className="blog-row">
            <div className="blog-col-xl-6 col-lg-6 col-md-6;">
              <div className="blog-home-blog-single mb-30">
                <div className="blog-blog-img-cap">
                  <div className="blog-blog-img">
                    <img
                      src="https://www.technokri.com/assets/img/blog/home-blog1.jpg"
                      alt=""
                    />
                    <div className="blog-blog-date text-center">
                      <span>24</span>
                      <p>Now</p>
                    </div>
                  </div>
                  <div className="blog-blog-cap">
                    <p>| Properties</p>
                    <h3>
                       <NavLink to="/">
                        Footprints in Time is perfect House in Kurashiki
                      </NavLink>
                    </h3>
                    <NavLink to="/findajob" className="blog-more-btn">
                      Read more »
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-col-xl-6 col-lg-6 col-md-6">
              <div className="blog-home-blog-single mb-30">
                <div className="blog-blog-img-cap">
                  <div className="blog-blog-img">
                    <img
                      src="https://www.technokri.com/assets/img/blog/home-blog2.jpg"
                      alt=""
                    />
                    <div className="blog-blog-date text-center">
                      <span>24</span>
                      <p>Now</p>
                    </div>
                  </div>
                  <div className="blog-blog-cap">
                    <p>| Properties</p>
                    <h3>
                      <NavLink to="/">
                        Footprints in Time is perfect House in Kurashiki
                      </NavLink>
                    </h3>
                    <NavLink to="/findajob" className="blog-more-btn">
                      Read more »
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
