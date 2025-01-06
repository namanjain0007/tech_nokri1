import {
  // BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import FindJob from "./components/pages/FindJob";
import Contact from "./components/pages/Contact";
import NavBar from "./components/NavBar";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Footer from "./components/Footer";
import FindJobBySearch from "./components/FindJobBySearch";
import Page404 from "./components/pages/Page404";
import CategoryJobs from "./components/CategoryJobs";
import ProfilePage from "./components/ProfilePage";
import { useContext, useEffect } from "react";
import Context from "./Context/Context";
import Preloader from "./components/Preloader";
import PaymentGateway from "./components/pages/PaymentGateway";
import JobRegistration from "./components/JobRegistration";
// import { login } from "../../server/controllers/auth-controllers";
// import Cookies from "js-cookie"; // Cookie se token retrieve karne ke liye
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const App = () => {
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile_page";
  const isViewMore = location.pathname.includes("view_moredetails");

  const {
    isLoggedIn,
    setLoading,
    loading,
    setIsLoggedIn,
    setLogInData,
    setTotalAppliedJobs,
  } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [location.pathname, location.search, setLoading]);

  useEffect(() => {
    const checkToken = async () => {
      const token = sessionStorage.getItem("jwt");
      if (!token) {
        setIsLoggedIn(false);
        setLogInData({});
        return;
      }

      try {

        // const decodedToken = jwtDecode(token);

        // const currentTime = Date.now() / 1000; // Current time in seconds

        // if (decodedToken.exp < currentTime) {
        //   sessionStorage.removeItem("jwt");
        //   setIsLoggedIn(false);
        //   setLogInData({});
        //   console.warn("Token expired, logging out.");
        //   alert("Oops! Session expired.");
        //   return;
        // }

        const response = await axios.get(
          "https://tech-nokri1.onrender.com/validate",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            // withCredentials: true,
          }
        );

        if (response.status === 200) {
          setIsLoggedIn(true);
          setLogInData(response.data.user);
          try {
            async function checkApplied() {
              try {
                const response2 = await axios.post(
                  "https://tech-nokri1.onrender.com/checkappliedjobs",
                  { _id: response.data.user._id },
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
                setTotalAppliedJobs(response2.data.count);

              } catch (error) {
                console.log(error);
              }
            }
            checkApplied();
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        alert("Token validation failed yes:", error);
        navigate("/login");
        sessionStorage.removeItem("jwt");
        setIsLoggedIn(false);
        setLogInData({});
      }
    };

    checkToken();
  }, []);

  useEffect(() => {
    if (
      (!isLoggedIn && location.pathname === "/profile_page") ||
      (!isLoggedIn && location.pathname.includes("view_moredetails"))
    ) {
      navigate("/login");
      // console.log("abc");
    }
    else if (isLoggedIn && location.pathname === "/login") {
      navigate("/profile_page");
    }
  }, [location.pathname, isLoggedIn, navigate]);

  return (
    <div>
      {/* <BrowserRouter> */}
      {loading ? (
        <Preloader />
      ) : (
        <>
          {!isProfilePage && !isViewMore && (
            <NavBar />
          )}
          {/* <ScrollTop /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/findajob" element={<FindJob />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration_page" element={<Register />} />
            <Route path="/find_job" element={<FindJobBySearch />} />
            <Route path="/category_jobs" element={<CategoryJobs />} />
            <Route path="/jobregistration" element={<JobRegistration />} />

            {isLoggedIn && (
              <Route path="/profile_page" element=<ProfilePage /> />
            )}
            {isLoggedIn && (
              <Route path="/view_moredetails" element={<ProfilePage />} />
            )}
            <Route path="/payment_gateway" element={<PaymentGateway />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
          {!isProfilePage && !isViewMore && (
            <Footer />
          )}
        </>
      )}
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
