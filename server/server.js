const express = require("express");
const server = express();

const cors = require("cors");
// const cookieParser = require("cookie-parser");
const session = require("express-session"); // session import

const connectDb = require("./utils/db");
const router = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const jobApplicationRouter = require("./router/job_application-router");

server.use(
  cors({
    origin: "https://tech-nokri1-frontend.onrender.com", // Frontend ka URL
    // credentials: true, // Cookies allow karna
  })
);

// server.use(
//   session({
//     secret: "yourSecretKey123", // Secret key (use a strong key in production)
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       httpOnly: true, // Security ke liye httpOnly
//     },
//   })
// );
// server.use(cookieParser());

const PORT = 5012;

server.use(express.json());

server.use("/", router);
server.use("/contactForm", contactRoute);
server.use("/", jobApplicationRouter);

connectDb().then(() => {
  server.listen(PORT, () => {
    console.log(`server started at PORT : ${PORT}`);
  });
});
