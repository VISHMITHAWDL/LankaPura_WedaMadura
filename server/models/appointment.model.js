import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  name: {
    type : String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  timeSlot: {
    type: String,
    required: true,
  },
  disease: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
