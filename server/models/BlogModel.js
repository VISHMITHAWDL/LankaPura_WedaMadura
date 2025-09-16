import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
  topic: { type: String, required: true, trim: true },
  date: { type: Date, default: Date.now },
  image: { type: String, required: true }, // Store image URL or file path
  subtitles: [
    {
      title: { type: String, required: true, trim: true },
      description: { type: String, required: true, trim: true }
    }
  ]
});

// Create the model
const Article = mongoose.model("Article", blogSchema);

export default Article; 


