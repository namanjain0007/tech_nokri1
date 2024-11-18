const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  message: { type: String, require },
  username: { type: String, require },
  email: { type: String, require },
  mobile: { type: String, require },
});

const Contact = new mongoose.model("contact", contactSchema);

module.exports = Contact;
