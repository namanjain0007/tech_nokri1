import "./CSS/Blog.css";

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
                      <a href="single-blog.html">
                        Footprints in Time is perfect House in Kurashiki
                      </a>
                    </h3>
                    <a href="/contact" className="blog-more-btn">
                      Read more »
                    </a>
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
                      <a href="single-blog.html">
                        Footprints in Time is perfect House in Kurashiki
                      </a>
                    </h3>
                    <a href="/contact" className="blog-more-btn">
                      Read more »
                    </a>
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
