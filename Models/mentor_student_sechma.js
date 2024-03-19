import mongoose from "mongoose";

const mentorschema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  studentId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  position: String,
  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mentor",
  },
});
export const Student = mongoose.model("student", studentSchema);

export const Mentor = new mongoose.model("mentor", mentorschema);
