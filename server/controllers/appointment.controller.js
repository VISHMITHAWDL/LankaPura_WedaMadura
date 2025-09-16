import Appointment from '../models/appointment.model.js';

// Create a new appointment
export const createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: 'Appointment created successfully', appointment });
  } catch (error) {
    res.status(400).json({ message: 'Error creating appointment', error });
  }
};


