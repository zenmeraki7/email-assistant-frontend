import express from "express";
import { sendEmail } from "../services/emailService.js";
import Joi from "joi";

const router = express.Router();

// Joi Schema for Validation
const emailValidationSchema = Joi.object({
  templateName: Joi.string().required().messages({
    "string.base": "Template name must be a string.",
    "any.required": "Template name is required.",
  }),
  to: Joi.string().email().required().messages({
    "string.email": "Recipient email must be a valid email address.",
    "any.required": "Recipient email is required.",
  }),
  subject: Joi.string().required().messages({
    "string.base": "Subject must be a string.",
    "any.required": "Subject is required.",
  }),
  data: Joi.object().required().messages({
    "object.base": "Data must be an object.",
    "any.required": "Data is required.",
  }),
  replyTo: Joi.string().email().messages({
    "string.email": "Reply-to email must be a valid email address.",
  }), // replyTo is optional, but if provided, must be a valid email
});

// Route with Validation
router.post("/send", async (req, res) => {
  const { error, value } = emailValidationSchema.validate(req.body);

  if (error) {
    return res.status(400).send({
      success: false,
      message: error.details[0].message, // Sends the first validation error message
    });
  }

  const { templateName, to, subject, data, replyTo } = value;

  try {
    await sendEmail(templateName, to, subject, data, replyTo);
    res
      .status(200)
      .send({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Failed to send email." });
  }
});

export default router;
