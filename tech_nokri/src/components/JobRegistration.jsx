import React, { useContext, useState } from "react";
import Context from "../Context/Context";
import "./CSS/JobRegistration.css";
import axios from "axios";

const JobRegistration = () => {
  const { logInData, courses, featuredData } = useContext(Context);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    job_id: featuredData?.id || "",
    user_id: logInData?._id || "",
    job_title: featuredData?.title || "",
    company_name: featuredData?.companyName || "",
    company_email: featuredData?.hrEmail || "",
    name: logInData?.username || "",
    email: logInData?.email || "",
    mobile: logInData?.mobile || "",
    date_of_birth: logInData?.date || "",
    category_id: logInData?.technology || "",
    experience: logInData?.experience || "",
    type: logInData?.type || "",
    about: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://tech-nokri1.onrender.com/jobregistration",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // alert("Registration successful!");
        // console.log("Form data submitted successfully:", response);
        setTimeout(() => {
          setSuccessMessage("Application submitted successfully.");
          setErrorMessage("");
          setFormData({
            job_id: "",
            user_id: "",
            job_title: "",
            company_name: "",
            company_email: "",
            name: "",

            email: "",
            mobile: "",
            date_of_birth: "",
            category_id: "",
            experience: "",
            type: "",
            about: "",
            resume: "",
          });
        }, 500);
      }
    } catch (error) {
      // console.error("Error submitting form:", error);
      // alert("Failed to submit form. Please try again.");
      setErrorMessage(error.message);
      setSuccessMessage("");
    }
  };

  return (
    <div className="jobreg-body">
      <div className="jobreg-form-container">
        <h2>Job Application</h2>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="job_id" value={formData.job_id} />
          <input type="hidden" name="user_id" value={formData.user_id} />

          <div className="jobreg-form-group">
            <label>Job Title:</label>
            <input
              type="text"
              name="job_title"
              value={formData.job_title}
              className="jobreg-form-control"
              readOnly
            />
          </div>

          <div className="jobreg-form-group">
            <label>Company Name:</label>
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              className="jobreg-form-control"
              readOnly
            />
          </div>

          <div className="jobreg-form-group">
            <label>Hr Email:</label>
            <input
              type="email"
              name="company_email"
              value={formData.company_email}
              className="jobreg-form-control"
              readOnly
            />
          </div>

          <div className="jobreg-form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              className="jobreg-form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="jobreg-form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className="jobreg-form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="jobreg-form-group">
            <label>Mobile:</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              className="jobreg-form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="jobreg-form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              className="jobreg-form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="jobreg-form-group">
            <label htmlFor="category_id">Category:</label>

            <select
              name="category_id"
              value={formData.category_id}
              className="jobreg-form-control"
              onChange={handleChange}
              required
            >
              <option value="">--Choose a technology--</option>
              {courses.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="jobreg-form-group">
            <label>Experience:</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              className="jobreg-form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="jobreg-form-group">
            <label>Type:</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              className="jobreg-form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="jobreg-form-group">
            <label>Message:</label>
            <textarea
              name="about"
              value={formData.about}
              className="jobreg-form-control"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="jobreg-form-group">
            <label>Resume:</label>
            <input
              type="file"
              name="resume"
              className="jobreg-form-control"
              onChange={handleChange}
              // required
            />
          </div>

          <button type="submit" className="jobreg-btn btn-primary">
            Submit Application
          </button>
        </form>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      </div>
    </div>
  );
};

export default JobRegistration;
