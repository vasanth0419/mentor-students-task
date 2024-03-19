import express from "express";
import { assignmentor, createMentor, getall, mentorapi, particularstudent } from "../Controllers/mentor_student.controller.js";

const router = express.Router();

router.get("/", mentorapi);
router.post("/creatementor", createMentor)
router.post('/assign-updatementor', assignmentor)
router.get('/getall-students', getall)
router.get('/part-student',particularstudent)

export default router;
