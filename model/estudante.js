const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  matriculation: { type: String, required: true, unique: true },
  grades: [
    {
      subject: { type: String, required: true },
      score: { type: Number, required: true, min: 0, max: 10 },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', studentSchema);