import express from "express";
import {
  createAssignment,
  getAllAssignments,
} from "../controllers/assignmentRouter.js";

const router = express.Router();

router.post("/", createAssignment);
router.get("/getall", getAllAssignments);

export default router;
