import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';

// Load environment variables
dotenv.config();

// Reusable (cached) Mongo connection for serverless cold starts
let isConnected = false;
async function connectDB() {
  if (isConnected) return;
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI is not defined');
    return;
  }
  try {
    await mongoose.connect(uri, {
      // Add any needed options here
    });
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Mongo connection error:', err.message);
  }
}

// Local development: start an HTTP server
if (!process.env.VERCEL) {
  const port = process.env.PORT || 4000;
  connectDB().then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  });
}

// Serverless export for Vercel (@vercel/node) – every request hits this handler
export default async function handler(req, res) {
  await connectDB();
  return app(req, res);
}



