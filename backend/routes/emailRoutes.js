import express from 'express';
import { sendEmail } from '../services/emailService.js';

const router = express.Router();

router.post('/send', async (req, res) => {
  const { templateName, to, subject, data } = req.body;

  try {
    await sendEmail(templateName, to, subject, data);
    res.status(200).send({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: 'Failed to send email.' });
  }
});

export default router;
