const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Patient = require("../models/patients");
const Doctor = require("../models/doctors");
// const { validateTasks } = require("../validation/validation");
const { login } = require("../middleware/auth");
// const User = require("../models/user");
// const schedule = require("node-schedule");
// const nodemailer = require("nodemailer");

router.get("/", login, async (req, res) => {
  console.log("okayy");
  let patients = await Doctor.findById(req.user._id)
    .populate("patients")
    .select("patients");
  //console.log(tasks);
  patients = patients.patients;
  // console.log(tasks);
  res.send(patients);
});

router.post("/", async (req, res) => {
  console.log(req.body.userId);
  let doctor = await Doctor.findById(req.body.userId);
  console.log("djw");
  console.log(doctor);
  let array = [];
  if (doctor.patients) {
    array = [...doctor.patients];
  }
  console.log("nddm");
  let patient = new Patient({
    ...req.body,
  });
  patient = await patient.save();
  array.push(patient._id);
  doctor.patients = array;
  await doctor.save();
  res.send(patient);
});

// router.put("/:id", login, async (req, res) => {
//   const task = await Task.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: {
//         isDone: true,
//       },
//     },
//     {
//       new: true,
//     }
//   );
//   if (!task) {
//     res.status(404).send("task doesn't exist");
//     return;
//   }
//   res.send(task);
// });

// router.delete("/:id", login, async (req, res) => {
//   const task = await Task.findByIdAndDelete(req.params.id);
//   if (!task) {
//     res.status(400).send("Task not present");
//   }

//   res.send(task);
// });

module.exports = router;
