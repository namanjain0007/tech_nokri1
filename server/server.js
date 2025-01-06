const express = require("express");
const server = express();

const cors = require("cors");

const connectDb = require("./utils/db");
const router = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const jobApplicationRouter = require("./router/job_application-router");

server.use(
  cors({
    origin: "https://tech-nokri1-frontend.onrender.com", // Frontend URL
   credentials: true, // Enable credentials (cookies, headers)
    allowedHeaders: ["Content-Type", "Authorization"], // Allow custom headers  })
);



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
