import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";
import { useContext, useState } from "react";
import Context from "../../Context/Context";
import axios from "axios";
const Login = () => {
  const { setLogInData, setIsLoggedIn } = useContext(Context);
  const [user, setUser] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  function handleData(e) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(user);

    try {
      const response = await axios.post("https://tech-nokri1.onrender.com/login", user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // Ye line cookie ko enable karega
      });
      setSuccessMessage("Login successful");
      setErrorMessage("");

      // console.log("LOGIN response.token", response);
      // alert("User login successfully");
      if (response.status === 200) {
        sessionStorage.setItem("jwt", response.data.token);
        setLogInData(response.data.user);
        setSuccessMessage("Login successful!");
        setTimeout(() => {
          setIsLoggedIn(true);
          navigate("/");
        }, 500);
      }
    } catch (error) {
      // console.error(error);
      setErrorMessage(error.response.data.mess);
      setSuccessMessage("");
      // alert("Error login ");
    }
  }
  return (
    <>
      <div className="login-container">
        <div className="text-center mt-3">
          <p>
            <button>
              <b>
                New user?
                <a href="/registration_page" className="register-link">
                  -Register here
                </a>
              </b>
            </button>
          </p>
        </div>

        <div className="form-card">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                value={user.email}
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={handleData}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={user.password}
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={handleData}
                required
              />
            </div>
            <div>
              <button type="submit" name="login" className="btn head-btn1">
                Login
              </button>
            </div>
          </form>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        </div>
      </div>
    </>
  );
};

export default Login;
