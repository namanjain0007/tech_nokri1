const { model } = require("mongoose");
const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ msg: "Sent sucessfully" });
  } catch (error) {
    console.error("Error delivering message:", error);

    return res.status(400).json({ msg: "msg not delivered" });
  }
};

module.exports = contactForm;
