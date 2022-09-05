const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    required: true,
  },
  patients: [{ type: mongoose.Schema.Types.ObjectId, ref: "patient" }],
  emailId: {
    type: String,
    required: true,
  },
});

const Doctor = mongoose.model("doctor", doctorSchema);

module.exports = Doctor;
