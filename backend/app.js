import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import studentRouter from "./routers/studentRouter.js"; // Remove destructuring {}

const app = express();
config({ path: "./config/.env" });
app.use("/api/v1/students", studentRouter);
dbConnection();

export default app;
