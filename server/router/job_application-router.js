const express = require("express");
const router = express.Router();
const jobApplicationForm = require("../controllers/job_application-controllers");

router.route("/").get(jobApplicationForm);
router.route("/jobregistration").post(jobApplicationForm);

module.exports = router;
