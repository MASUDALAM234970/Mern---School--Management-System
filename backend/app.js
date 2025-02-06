import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import studentRouter from "./router/studentRouter.js";

import assignmentRouter from "./router/assignmentRouter.js";

<<<<<<< HEAD
import announcementRouter from "./router/announcementRouter.js";

import libraryRouter from "./router/libraryRouter.js";
import eventsRouter from "./router/eventsRouter.js";

=======
//import announcementRouter from "./router/announcementRouter.js";
//import classRouter from "./router/classRouter.js";
import libraryRouter from "./router/libraryRouter.js";
import eventsRouter from "./router/eventsRouter.js";
//import examRouter from "./router/examRouter.js";
//import attendanceRouter from "./router/attendanceRouter.js";
//import usersRouter from "./router/usersRouter.js";
//import adminRegisterRouter from "./router/";
>>>>>>> b69b43265c10c0663d46f5417ad6835650c9e892
import { errorHandler } from "./middlewares/errorHandler.js"; // ✅ Import error handler

const app = express();
config({ path: "./config/.env" });

app.use(express.json()); // ✅ Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // ✅ (Optional) Middleware for form data

app.use("/api/v1/students", studentRouter);
app.use("/api/v1/events", eventsRouter);

app.use("/api/v1/assignments", assignmentRouter);

<<<<<<< HEAD
app.use("/api/v1/announcements", announcementRouter);
=======
//app.use("/api/v1/announcements", announcementRouter);
//app.use("/api/v1/class", classRouter);
app.use("/api/v1/library", libraryRouter);
//app.use("/api/v1/events", eventsRouter);
//app.use("/api/v1/exam", examRouter);
//app.use("/api/v1/attendance", attendanceRouter);
>>>>>>> b69b43265c10c0663d46f5417ad6835650c9e892

app.use("/api/v1/library", libraryRouter);

// ✅ Global Error Handler Middleware (MUST be placed at the end)
app.use(errorHandler);

dbConnection();

export default app;
