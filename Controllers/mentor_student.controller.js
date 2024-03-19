import { Mentor, Student } from "../Models/mentor_student_sechma.js";

export const mentorapi = async (req, res) => {
  try {
    res.status(200).send(`App get Api Call is working `);
  } catch (error) {
    res.status(500).json({
      message: "Internal server Error",
    });
  }
};


// create mentor api
export const createMentor = async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    console.log(mentor);
    res
      .status(201)
      .json({ message: "Mentor created successfully", mentor: mentor });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}


// create student

export const createstudent = async (req, res) => {
   try {
     const student = new Student(req.body);
     await student.save();
     res
       .status(201)
       .json({ message: "Student created successfully", student: student });
   } catch (err) {
     console.error(err);
     res.status(500).json({ error: "Server error" });
   }
}


// assign mentor to student

export const assignmentor = async (req, res) => {
  try {
    const { studentId } = req.params;
    const { mentorId } = req.body;

    
    const student = await Student.findByIdAndUpdate(
      studentId,
      { mentor: mentorId },
      { new: true }
    );

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({
      message: 'Assigned a mentor to the student successfully',
      student
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}


// Show all students for a particular mentor API

export const getall = async (req, res) => {
  try {
    const { mentorId } = req.params;

   
    const students = await Student.find({ mentor: mentorId });

    if (students.length === 0) {
      return res
        .status(404)
        .json({ message: "No students found for this mentor" });
    }

    res.status(200).json({
      message: "Successfully fetched students data with mentor",
      students,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};


// particularstudent 
export const particularstudent = async (req, res) => {
  try {
    const { studentId } = req.params;

    const student = await Student.findById(studentId).populate("mentor");

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      message: "Successfully fetched mentor of the student",
      mentor: student.mentor,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};