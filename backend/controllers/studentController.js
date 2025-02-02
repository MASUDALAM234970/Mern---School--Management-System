import { student } from "../models/studentSchema";

export const createStudent = async (req, res, next) => {
  const { name, registratinNumber, grade } = req.body;
  try {
    if (!name || !registratinNumber || !grade)
      next("Error: Please provide all the required field");
    await student.create({ name, registratinNumber, grade });
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
    const students = await student.find({});
    res
      .status(200)
      .json({
        success: true,
        message: "All the Students are listed below",
        data: students,
      });
  } catch (err) {
    next(err);
  }
};
