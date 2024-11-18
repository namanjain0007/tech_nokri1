const jwt = require("jsonwebtoken");

// const authenticateToken = (req, res, next) => {
//   const token = req.cookies.jwt; // Get token from cookies
//   if (!token)
//     return res.status(401).json({ msg: "Access denied, no token provided" });

//   try {
//     const verified = jwt.verify(token, "yourSecretKey123");
//     console.log("verified", verified);
//     req.user = verified; // Add user details to request object
//     next();
//   } catch (err) {
//     res.status(403).json({ msg: "Invalid or expired token" });
//   }
// };
const authenticateToken = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ msg: "No token provided!" });
  }

  jwt.verify(token, "yourSecretKey123", (err, decoded) => {
    if (err) {
      // Agar token expired ya invalid hai, to error return karo
      return res
        .status(403)
        .json({ msg: "Token has expired or is invalid! beta" });
    }

    // Token valid hai, aur expiry check karte hain
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    if (decoded.exp < currentTime) {
      // Agar token ki expiry ho gayi hai
      return res.status(403).json({ msg: "Token has expired!" });
    }

    req.user = decoded; // Decoded user info ko request me set kar rahe hain
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = authenticateToken;
