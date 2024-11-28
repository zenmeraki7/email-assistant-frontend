import nodemailer from "nodemailer";
import { renderTemplate } from "./templateService.js";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail", // Using Gmail for sending emails
  host: "smtp.gmail.com",
  port: 587, // You can also use 465 for SSL
  secure: false, // false for TLS
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address from the .env file
    pass: process.env.EMAIL_PASS, // Your Gmail app password or normal password
  },
});

export const sendEmail = async (templateName, to, subject, data, replyTo) => {
  try {
    // Render the template (ensure renderTemplate works as expected)
    const html = renderTemplate(templateName, data);

    // Set up mail options
    const mailOptions = {
      from: '"Power House Gym" <ksabhishek32@gmail.com>',
      to, // The recipient's email
      subject, // The subject of the email
      html, // The HTML body content
      replyTo,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response); // Log the response

    return info; // Return the result (optional)
  } catch (error) {
    console.error("Error sending email: ", error); // Handle any errors
    throw error; // Throw error to be handled by the calling code
  }
};
