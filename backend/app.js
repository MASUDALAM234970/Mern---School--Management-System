import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import studentRouter from "./router/studentRouter.js";

import assignmentRouter from "./router/assignmentRouter.js";

import announcementRouter from "./router/announcementRouter.js";

import eventsRouter from "./router/eventsRouter.js";

//import announcementRouter from "./router/announcementRouter.js";
//import classRouter from "./router/classRouter.js";
import libraryRouter from "./router/libraryRouter.js";

import { errorHandler } from "./middlewares/errorHandler.js"; // ✅ Import error handler

const app = express();
config({ path: "./config/.env" });

app.use(express.json()); // ✅ Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // ✅ (Optional) Middleware for form data

app.use("/api/v1/students", studentRouter);
app.use("/api/v1/events", eventsRouter);

app.use("/api/v1/assignments", assignmentRouter);

app.use("/api/v1/announcements", announcementRouter);

app.use("/api/v1/library", libraryRouter);

// ✅ Global Error Handler Middleware (MUST be placed at the end)
app.use(errorHandler);

dbConnection();

export default app;
