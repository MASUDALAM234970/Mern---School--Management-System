import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import studentRouter from "./routers/studentRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js"; // ✅ Import error handler

const app = express();
config({ path: "./config/.env" });

app.use(express.json()); // ✅ Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // ✅ (Optional) Middleware for form data

app.use("/api/v1/students", studentRouter);

// ✅ Global Error Handler Middleware (MUST be placed at the end)
app.use(errorHandler);

dbConnection();

export default app;
