const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate-middleware");
const ContactSchema = require("../validators/contact-validator");

const contactForm = require("../controllers/auth-contact");

router.route("/contact").post(validate(ContactSchema), contactForm);
// router.route("/register").post(validate(signupSchema), register);

module.exports = router;
