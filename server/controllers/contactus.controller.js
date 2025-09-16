import ContactUs from "../models/contactus.model.js";

export const createContact = async (req, res) => {
    try {
        const contact = new ContactUs(req.body);
        await contact.save();
        res.status(201).json({ message: 'contact us create successfully', contact});
    } catch (error) {
        res.status(400).json({ message: 'Error creating contact us ', error})
    }
};