const express = require("express");
const router = express.Router();
const signupSchema = require("../validators/auth-validator");
const validate = require("../middleware/validate-middleware");
// const authenticateToken = require("../middleware/authenticateToken");
// const { validateUser } = require("../middleware/authenticateToken");

const {
  home,
  register,
  login,
  getProfile,
} = require("../controllers/auth-controllers");

router.route("/").get(home);
// router.route("/register").get(register);
// router.route("/register").post(register);
router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(login);

// router.route("/auth/validate").get(getProfile);
// router.route("/validate").get(authenticateToken, getProfile);
router.route("/validate").get(getProfile);

module.exports = router;
