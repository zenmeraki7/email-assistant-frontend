import express from "express";
import { sendEmail } from "../services/emailService.js";
import Joi from "joi";
import { upload } from "../middlewares/uploadMiddleware.js";

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
  // data: Joi.object().required().messages({
  //   "object.base": "Data must be an object.",
  //   "any.required": "Data is required.",
  // }),
  replyTo: Joi.string().email().messages({
    "string.email": "Reply-to email must be a valid email address.",
  }), // replyTo is optional, but if provided, must be a valid email
});

// Route with Validation
router.post(
  "/send",
  upload.fields([{ name: "image", maxCount: 1 }]),
  async (req, res) => {
    const { error, value } = emailValidationSchema.validate(req.body);
    const image = req.files["image"] ? req.files["image"][0].path : null;
    console.log(image);

    if (error) {
      return res.status(400).send({
        success: false,
        message: error.details[0].message, // Sends the first validation error message
      });
    }

    const { templateName, to, subject, replyTo } = value;

    try {
      await sendEmail(
        templateName,
        to,
        subject,
        {
          image: image,
          user_name: "Abhishek ks",
          company_name: "Zen meraki",
          order_id: "12345678",
          carrier_name: "Someone",
          delivery_date: "10-1-2025",
          support_email: "123@gmail.com",
          cta_link:
            "https://www.justdial.com/Kochi/Gladiator-Health-And-Fitness-Centre-Near-By-HP-CARE-Kadavanthara/0484PX484-X484-140508150420-W2K3_BZDET?trkid=&term=&ncatid=11575244&area=&search=Popular%20Gyms%20in%20Kochi&mncatname=Gyms&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&",
        },
        replyTo
      );
      res
        .status(200)
        .send({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ success: false, message: "Failed to send email." });
    }
  }
);

export default router;
