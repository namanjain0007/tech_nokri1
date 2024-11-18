import { useContext, useState } from "react";
import Context from "../../Context/Context";
import axios from "axios";

import "../CSS/Register.css"; // Ensure you import the CSS
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { courses, experience } = useContext(Context);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    date: "",
    technology: "",
    experience: "",
    type: "",
    branch: "",
    courseList: "",
    photo: "",
  });

  const branches = [
    "VIJAY NAGAR 54",
    "BHAWARKUA",
    "VIJAY NAGAR Shagun Tower",
    "PALASIA",
  ];

  const optionsList = [
    "JAVA ASSISTANCE",
    "MERN STACK ASSISTANCE",
    "PYTHON ASSISTANCE",
    "DATA ANALYTICS ASSISTANCE",
    "SOFTWARE TESTING ASSISTANCE",
    "JAVA CORPORATE",
    "MERN CORPORATE",
    "PYTHON CORPORATE",
    "SOFTWARE TESTING CORPORATE",
    "DATA ANALYTICS CORPORATE",
    "DATA SCIENCE CORPORATE",
    "DATA SCIENCE ASSISTANCE",
    "DEVOPS CORPORATE",
    "SALESFORCE CORPORATE",
    "SALESFORCE ASSISTANCE",
    "DEVOPS ASSISTANCE",
    ".NET ASSISTANCE",
    ".NET CORPORATE",
    "REACT ASSISTANCE",
    "REACT CORPORATE",
    "FLUTTER ASSISTANCE",
    "FLUTTER CORPORATE",
    "iOS CORPORATE",
    "iOS ASSISTANCE",
    "ANDROID CORPORATE",
    "ANDROID ASSISTANCE",
  ];

  function handleFormData(e) {
    const { name, type } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: e.target.files[0] })); // Store the file
    } else {
      setFormData((prev) => ({ ...prev, [name]: e.target.value }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData);
    // setFormData({
    //   name: "",
    //   email: "",
    //   mobile: "",
    //   password: "",
    //   confirmPassword: "",
    //   date: "",
    //   technology: "",
    //   experience: "",
    //   type: "",
    //   branch: "",
    //   courseList: "",
    //   photo: "",
    // });
    try {
      const response = await axios.post(
        "https://tech-nokri1.onrender.com/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response.data);
      setSuccessMessage("Registeration successful");
      setErrorMessage("");
      // alert("User registered successfully");
      // console.log("response.token", response);

      // console.log(response);
      if (response.status === 200) {
        setTimeout(() => {
          navigate("/login");
        }, 500);
      }
    } catch (error) {
      // console.error(error);
      setErrorMessage(error.response.data.msg);
      setSuccessMessage("");
      // alert("Error registering user");
    }
  }

  return (
    <div className="register-container">
      <h4>Please Register Here</h4>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>FULL NAME</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleFormData}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label>EMAIL</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFormData}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>MOBILE</label>
          <input
            type="tel"
            required
            name="mobile"
            value={formData.mobile}
            onChange={handleFormData}
            placeholder="Enter your mobile number"
          />
        </div>
        <div className="form-group">
          <label>PASSWORD</label>
          <input
            required
            type="password"
            name="password"
            value={formData.password}
            onChange={handleFormData}
            placeholder="Enter password"
          />
        </div>
        <div className="form-group">
          <label>CONFIRM PASSWORD</label>
          <input
            required
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleFormData}
            placeholder="Confirm your password"
          />
        </div>
        <div className="form-group">
          <label>DATE OF BIRTH</label>
          <input
            required
            type="date"
            name="date"
            value={formData.date}
            onChange={handleFormData}
          />
        </div>
        <div className="form-group">
          <label>TECHNOLOGY</label>
          <select
            required
            name="technology"
            value={formData.technology}
            onChange={handleFormData}
          >
            <option value="">Choose a technology</option>
            {courses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>EXPERIENCE (IN YEARS)</label>
          <select
            required
            name="experience"
            value={formData.experience}
            onChange={handleFormData}
          >
            <option value="">Select Experience</option>
            {experience.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group radio-group">
          <label>TYPE</label>
          <div className="radio-buttons">
            {/* Add this wrapper for radio buttons */}
            <label>
              <input
                type="radio"
                value="Internal"
                name="type"
                required
                onChange={handleFormData}
                checked={formData.type === "Internal"}
              />
              INTERNAL
            </label>
            <label>
              <input
                type="radio"
                value="External"
                name="type"
                required
                checked={formData.type === "External"}
                onChange={handleFormData}
              />
              EXTERNAL
            </label>
          </div>
        </div>
        {formData.type === "Internal" ? (
          <>
            <div className="form-group">
              <label>BRANCH</label>
              <select name="branch" required onChange={handleFormData}>
                <option value="">Choose a branch</option>
                {branches.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>COURSE</label>
              <select required name="courseList" onChange={handleFormData}>
                <option value="">Choose a Course</option>
                {optionsList.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>UPLOAD A PHOTO</label>
              <input
                type="file"
                // required
                name="photo"
                accept="image/*" // Accepts only image files
                onChange={handleFormData} // Handles the file change
              />
            </div>
          </>
        ) : (
          <div className="form-group">
            <label>UPLOAD A PHOTO</label>
            <input
              type="file"
              // required
              name="photo"
              accept="image/*" // Accepts image file types
              onChange={handleFormData}
            />
          </div>
        )}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

        <div>
          <input type="submit" value={"Register"} />
        </div>
      </form>
    </div>
  );
};

export default Register;
