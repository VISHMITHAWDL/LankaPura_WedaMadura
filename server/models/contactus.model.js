import mongoose from 'mongoose';

const contactUsSchema = new mongoose.Schema({

  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  country: {
    type: String,

  },
  message: {
    type: String,
    required: true,
  },
}, {
    timestamps: true,
});

const ContactUs = mongoose.model('ContactUs', contactUsSchema);

export default ContactUs;