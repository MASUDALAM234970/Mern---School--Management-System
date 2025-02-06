import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import studentRouter from "./router/studentRouter.js";
//import teacherRouter from "./router/teacherRouter.js";
//import assignmentRouter from "./router/assignmentRouter.js";

//import announcementRouter from "./router/announcementRouter.js";
//import classRouter from "./router/classRouter.js";
//import libraryRouter from "./router/libraryRouter.js";
import eventsRouter from "./router/eventsRouter.js";
//import examRouter from "./router/examRouter.js";
//import attendanceRouter from "./router/attendanceRouter.js";
//import usersRouter from "./router/usersRouter.js";
//import adminRegisterRouter from "./router/adminRegisterRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js"; // ✅ Import error handler

const app = express();
config({ path: "./config/.env" });

app.use(express.json()); // ✅ Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // ✅ (Optional) Middleware for form data

app.use("/api/v1/students", studentRouter);
app.use("/api/v1/events", eventsRouter);

// ✅ Global Error Handler Middleware (MUST be placed at the end)
app.use(errorHandler);

dbConnection();

export default app;
