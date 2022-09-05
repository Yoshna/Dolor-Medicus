const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor",
  },
  emailId: {
    type: String,
    required: true,
  },
  caseId: {
    type: String,
    required: true,
  },
});

const Patient = mongoose.model("patient", patientSchema);

module.exports = Patient;
