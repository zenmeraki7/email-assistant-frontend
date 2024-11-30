import express from "express";
import bodyParser from "body-parser";
import emailRoutes from "./routes/emailRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import { connectDB } from "./config/db.js";
dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/api/emails", emailRoutes);
app.use("/api/auth", authRoutes);

// Error Middleware
app.use(errorMiddleware);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
