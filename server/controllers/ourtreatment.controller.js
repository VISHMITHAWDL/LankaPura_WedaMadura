import AyurvedicTreatment from '../models/ourtreatmentmodel.js';


  // Create a new treatment
  export const createTreatment = async (req, res) => {
    try {
      const { treatmentName, description } = req.body;

      // Validate required fields
      if (!treatmentName || !description) {
        return res.status(400).json({ message: 'All fields are required.' });
      }

      const newTreatment = new AyurvedicTreatment({
        treatmentName,
        description
      });

      const savedTreatment = await newTreatment.save();
      res.status(201).json(savedTreatment);
    } catch (error) {
      res.status(500).json({ message: 'Error creating treatment.', error });
    }
  }

  // Get all treatments
  // export const getAllTreatments = async (req, res) => {
  //   try {
  //     const treatments = await AyurvedicTreatment.find();
  //     res.status(200).json(treatments);
  //   } catch (error) {
  //     res.status(500).json({ message: 'Error fetching treatments.', error });
  //   }
  // }

  // Get a single treatment by ID
  // export const getTreatmentById = async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const treatment = await AyurvedicTreatment.findById(id);

  //     if (!treatment) {
  //       return res.status(404).json({ message: 'Treatment not found.' });
  //     }

  //     res.status(200).json(treatment);
  //   } catch (error) {
  //     res.status(500).json({ message: 'Error fetching treatment.', error });
  //   }
  // }

  // Update a treatment by ID
  // export const updateTreatment = async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const { treatmentName, description } = req.body;

  //     const updatedTreatment = await AyurvedicTreatment.findByIdAndUpdate(
  //       id,
  //       { treatmentName, description },
  //       { new: true, runValidators: true }
  //     );

  //     if (!updatedTreatment) {
  //       return res.status(404).json({ message: 'Treatment not found.' });
  //     }

  //     res.status(200).json(updatedTreatment);
  //   } catch (error) {
  //     res.status(500).json({ message: 'Error updating treatment.', error });
  //   }
  // }

  // Delete a treatment by ID
  // export const deleteTreatment = async (req, res) => {
  //   try {
  //     const { id } = req.params;

  //     const deletedTreatment = await AyurvedicTreatment.findByIdAndDelete(id);

  //     if (!deletedTreatment) {
  //       return res.status(404).json({ message: 'Treatment not found.' });
  //     }

  //     res.status(200).json({ message: 'Treatment deleted successfully.' });
  //   } catch (error) {
  //     res.status(500).json({ message: 'Error deleting treatment.', error });
  //   }
  // }

