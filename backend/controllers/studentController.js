import { Student } from "../models/studentSchema.js"; // ✅ Correct (matches export name)

import { handleValidationError } from "../middlewares/errorHandler.js";

export const createStudent = async (req, res, next) => {
  console.log(req.body);

  const { name, registrationNumber, grade } = req.body;

  try {
    if (!name || !registrationNumber || !grade) {
      return next(
        handleValidationError("Error: Please provide all required fields", 400)
      );
    }

    // ✅ Check if registrationNumber already exists
    const existingStudent = await Student.findOne({ registrationNumber });
    if (existingStudent) {
      return next(
        handleValidationError("Error: Registration number already exists", 400)
      );
    }

    await Student.create({ name, registrationNumber, grade });

    res.status(201).json({
      success: true,
      message: "Student created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find(); // Retrieve all students
    res.status(200).json({
      success: true,
      message: "All the Students are listed below",
      data: students,
    });
  } catch (err) {
    next(err);
  }
};
