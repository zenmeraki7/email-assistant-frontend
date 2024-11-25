import nodemailer from 'nodemailer';
import { renderTemplate } from './templateService.js';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Replace with your provider (e.g., SendGrid, SES)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (templateName, to, subject, data) => {
  const html = renderTemplate(templateName, data);

  const mailOptions = {
    from: '"Your Company" <your-email@example.com>',
    to,
    subject,
    html,
  };

  return transporter.sendMail(mailOptions);
};
