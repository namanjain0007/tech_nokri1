import { useState } from "react";
import "../CSS/Contact.css";
import Image from "./Find Jobs/Image";
import axios from "axios";
const Contact = () => {
  const [contactData, setContactData] = useState({
    username: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function handleData(e) {
    setContactData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(contactData);

    try {
      const response = await axios.post(
        "https://tech-nokri1.onrender.com/contactForm/contact",
        contactData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      
      // console.log(response.data);
      if (response.status === 200) {
        setTimeout(() => {
          setSuccessMessage("message sent successful");
      setErrorMessage("");
          setContactData({
            username: "",
            email: "",
            mobile: "",
            message: "",
          });
        }, 1000);
      }
      // alert("message sent successfully");
    } catch (error) {
      // console.error(error.response.data.msg);
      setErrorMessage(error.response.data.msg);
      setSuccessMessage("");
      // alert("message not delieverd");
    }
  }
  return (
    <>
      <Image title={"Contact Us"} />
      <section className="contact-contact-section">
        <div className="contact-contact-container">
          <div className="contact-contact-form-container">
            <div className="contact-contact-row">
              <div className="contact-contact-col-12">
                <h2 className="contact-contact-title">Get in Touch</h2>
              </div>
              <center
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                {successMessage && (
                  <p style={{ color: "greenyellow" }}>{successMessage}</p>
                )}
                <div className="contact-contact-col-lg-8 offset-lg-2">
                 
                  <form
                    onSubmit={handleSubmit}
                    className="contact-contact-form-contact contact_form"
                  >
                    <div className="contact-contact-form-group">
                      <textarea
                        className="contact-contact-form-control w-100"
                        name="message"
                        value={contactData.message}
                        onChange={handleData}
                        cols="30"
                        rows="7"
                        placeholder="Write Message"
                      ></textarea>
                    </div>
                    <div className="contact-contact-form-row">
                      <div className="contact-contact-form-group col-sm-6">
                        <input
                          className="contact-contact-form-control"
                          name="username"
                          value={contactData.username}
                          onChange={handleData}
                          type="text"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="contact-contact-form-group col-sm-6">
                        <input
                          className="contact-contact-form-control"
                          name="email"
                          value={contactData.email}
                          onChange={handleData}
                          type="email"
                          placeholder="Enter email address"
                        />
                      </div>
                    </div>
                    <div className="contact-contact-form-group">
                      <input
                        className="contact-contact-form-control"
                        name="mobile"
                        value={contactData.mobile}
                        onChange={handleData}
                        type="text"
                        placeholder="Enter Mobile Number"
                      />
                    </div>
                    <div className="contact-contact-form-group text-center">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </center>
            </div>
          </div>
           
        </div>
      </section>
      <div className="contact-container">
        <h4
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="contact-contact-info__icon">
            <i className="ti-home"></i> &nbsp; Tech Noukri
          </span>
          <span className="contact-contact-info__icon">
            <i className="ti-tablet"></i> &nbsp; 078050-63968
          </span>
          <span className="contact-contact-info__icon">
            <i className="ti-email"></i> &nbsp; shivaconceptsolution@gmail.com
          </span>
        </h4>
        
      </div>
    </>
  );
};

export default Contact;
