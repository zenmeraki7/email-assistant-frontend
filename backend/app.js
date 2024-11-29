import express from "express";
import bodyParser from "body-parser";
import emailRoutes from "./routes/emailRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/api/emails", emailRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
