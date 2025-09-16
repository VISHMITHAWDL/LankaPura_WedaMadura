import mongoose from 'mongoose';

const AyurvedicTreatmentSchema = new mongoose.Schema({
  treatmentName: {
    type: String,
    required: true,
    // trim: true
  },
  description: {
    type: String,
    required: true,
    // trim: true
  },  
  
  
  
});

const AyurvedicTreatment = mongoose.model('ourtreatmentmodel', AyurvedicTreatmentSchema);

export default AyurvedicTreatment;
