import { useNavigate } from "react-router-dom";
import "../../CSS/Online.css";
const OnlineCv = ({ title, path, btnName }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="online-cvcv-bgsection-overlypt-80pb-80">
        <div className="containerr">
          <div className="rowjustify-content-center">
            <div className="col-xl-10">
              <div className="cv-captiontext-center">
                {/* FEATURED TOURS Packages */}
                <p className="pera2">{title}</p>
                <button
                  onClick={() => navigate(path)}
                  className="border-btn2border-btn4"
                >
                  {btnName}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineCv;
