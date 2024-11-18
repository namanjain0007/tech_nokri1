const Job_application = require("../models/job_application");

const jobApplication = async (req, res) => {
  try {
    const response = req.body;
    await Job_application.create(response);
    return res.status(200).json({ msg: "Application submitted successfully." });
  } catch (error) {
    // console.error("application not sent:", error);

    return res.status(400).json({ msg: "error sending application" });
  }
};

module.exports = jobApplication;
