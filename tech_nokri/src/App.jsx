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
  const isPage404 = location.pathname === "/*";
  const is404Page = location.pathname.includes("/*");

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

  // useEffect(() => {
  //   const checkToken = async () => {
  //     const token = Cookies.get("jwt");

  //     if (!token) {
  //       setIsLoggedIn(false);
  //       setLogInData({});
  //       return;
  //     }

  //     try {
  //       // JWT ko decode kar rahe hain
  //       const decodedToken = jwtDecode(token);

  //       // Expiry check kar rahe hain
  //       const currentTime = Date.now() / 1000; // Current time in seconds
  //       if (decodedToken.exp < currentTime) {
  //         Cookies.remove("jwt");
  //         setIsLoggedIn(false);
  //         setLogInData({});
  //         console.warn("Token expired, logging out.");
  //         alert("oops session expired");
  //         return;
  //       }

  //       // Agar token valid hai, server se validate karo
  //       const response = await axios.get("http://localhost:5012/validate", {
  //         headers: {
  //           Authorization: `Bearer ${token}`, // Token ko Authorization header me bhejna
  //         },
  //         withCredentials: true, // Cookies ko bhejna
  //       });

  //       if (response.status === 200) {
  //         setIsLoggedIn(true);
  //         setLogInData(response.data.user); // Server se milta user data
  //         console.log("authorized");
  //       }
  //     } catch (error) {
  //       console.error("Token validation failed:", error);
  //       Cookies.remove("jwt");
  //       setIsLoggedIn(false);
  //       setLogInData({});
  //     }
  //   };

  //   checkToken();
  // }, []);
  // Empty dependency array, sirf mount hone par chalega

  // useEffect(() => {
  //   const loggedInStatus = localStorage.getItem("isLoggedIn");
  //   const storedUser = localStorage.getItem("logInData");

  //   if (loggedInStatus === "true") {
  //     setIsLoggedIn(true);

  //     if (storedUser) {
  //       const userObject = JSON.parse(storedUser);
  //       setLogInData(userObject);
  //       // console.log("abcd", userObject);
  //     }
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, [setIsLoggedIn, setLogInData]);

  useEffect(() => {
    const checkToken = async () => {
      const token = sessionStorage.getItem("jwt");
      if (!token) {
        setIsLoggedIn(false);
        setLogInData({});
        return;
      }

      try {
        // Token decode karke expiry check karte hain

        const decodedToken = jwtDecode(token);

        const currentTime = Date.now() / 1000; // Current time in seconds

        if (decodedToken.exp < currentTime) {
          sessionStorage.removeItem("jwt");
          setIsLoggedIn(false);
          setLogInData({});
          console.warn("Token expired, logging out.");
          alert("Oops! Session expired.");
          return;
        }

        const response = await axios.get(
          "https://tech-nokri1.onrender.com/validate",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          setIsLoggedIn(true);
          setLogInData(response.data.user);
          try {
            async function checkApplied() {
              try {
                // console.log("andr aaya");
                const response2 = await axios.post(
                  "https://tech-nokri1.onrender.com/checkappliedjobs",
                  { _id: response.data.user._id },
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
                console.log("app", response2);
                setTotalAppliedJobs(response2.data.count);

                // console.log("len", response.data.len);
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
        console.error("Token validation failed yes:", error);
        sessionStorage.removeItem("jwt");
        setIsLoggedIn(false);
        setLogInData({});
      }
    };

    checkToken();
  }, []);

  useEffect(() => {
    // console.log("isLoggedIn: ", isLoggedIn);
    if (
      (!isLoggedIn && location.pathname === "/profile_page") ||
      (!isLoggedIn && location.pathname.includes("view_moredetails"))
    ) {
      navigate("/login");
      // console.log("abc");
    }
  }, [location.pathname, isLoggedIn, navigate]);

  useEffect(() => {
    // Agar user logged in hai aur profile page pe jaana chah raha hai, toh profile page dikhaye
    if (isLoggedIn && location.pathname === "/login") {
      navigate("/profile_page"); // Redirecting to profile page if logged in and user is on login page
    }
  }, [isLoggedIn, location.pathname, navigate]);

  return (
    <div>
      {/* <BrowserRouter> */}
      {loading ? (
        <Preloader />
      ) : (
        <>
          {!isProfilePage && !isPage404 && !is404Page && !isViewMore && (
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

            {/* {!isLoggedIn && location.path === "/profile_page" ? (
              navigate("/login")
            ) : (
              <Route path="/profile_page" element=<ProfilePage /> />
            )} */}

            {/* <Route
              path="/profile_page"
              element={isLoggedIn ? <ProfilePage /> : <Login />}
            /> */}
            {/* )} */}
            {isLoggedIn && (
              <Route path="/profile_page" element=<ProfilePage /> />
            )}
            {isLoggedIn && (
              <Route path="/view_moredetails" element={<ProfilePage />} />
            )}
            <Route path="/payment_gateway" element={<PaymentGateway />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
          {!isProfilePage && !isPage404 && !is404Page && !isViewMore && (
            <Footer />
          )}
        </>
      )}
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
