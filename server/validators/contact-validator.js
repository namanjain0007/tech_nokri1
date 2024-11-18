const { z } = require("zod");

const signUpSchema = z.object({
  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(1, { message: "Message cannot be empty" }),

  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),

  mobile: z
    .string({ required_error: "Mobile is required" })
    .trim()
    .length(10, { message: "Phone must be exactly 10 digits" }),
});

module.exports = signUpSchema;
