const mongoose = require("mongoose");

const JobApplicationSchema = new mongoose.Schema(
  {
    job_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    job_title: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    company_email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    category_id: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    type: {
      type: String,

      required: false,
    },
    about: {
      type: String,
      required: true,
    },
    // resume: {

    //   required: false,
    // },
  },
  { strict: true }
);

const Job_application = new mongoose.model(
  "jobApplication",
  JobApplicationSchema
);
module.exports = Job_application;
