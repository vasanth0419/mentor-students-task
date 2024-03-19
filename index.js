import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mentorRouter from "./Routers/mentor_student.router.js";
import { connectDB } from "./Database/config.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/mentor", mentorRouter);

app.listen(port, () => {
  console.log("app is running", port);
});
