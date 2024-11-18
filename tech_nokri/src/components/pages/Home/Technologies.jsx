import { useContext } from "react";
import Context from "../../../Context/Context";
import "../../CSS/Technologies.css";
import { useNavigate } from "react-router-dom";
const Technologies = () => {
  const { technologies, setCatTechName } = useContext(Context);
  const navigate = useNavigate();
  function handleNavigate(e, name) {
    e.preventDefault();
    setCatTechName(name);
    const a = name.toLowerCase().replace(" ", "+");
    const value = `category_name=${a}`;
    // console.log(`?${value}`);
    navigate(`/category_jobs?${value}`);
  }

  return (
    <>
      <section>
        <div className="container-technologies">
          <div className="heading-technologies">
            <div>
              <div>
                <h2>Technologies</h2>
              </div>
            </div>
          </div>
          <div className="technologies">
            <div className="tech-container">
              {technologies.map((item, i) => (
                <div className="course-div" key={i}>
                  <a
                    onClick={(e) => handleNavigate(e, item.technology)}
                    href=""
                  >
                    <div>
                      <img src={item.url} alt="noPic" />
                    </div>
                    <div>
                      <span>
                        {item.name}({item.jobs})
                      </span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
