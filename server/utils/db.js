const mongoose = require("mongoose");
// const URL = "mongodb://127.0.0.1:27017/tech_nokri";
//connecct to atlass
const uri =
  "mongodb+srv://namanjain:Namanjain%40321@cluster0.41e2x.mongodb.net/tech_nokri";

// const connectDb = async () => {
//   try {
//     await mongoose.connect(URL);
//     console.log("connection successful to DB");
//   } catch {
//     console.log("database connection failed");

//     process.exit(0);
//   }
// };

const connectDb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connection successful to DB");
  } catch (error) {
    console.log("Database connection failed:", error.message);
    process.exit(1); // Exit with a failure code
  }
};
module.exports = connectDb;
