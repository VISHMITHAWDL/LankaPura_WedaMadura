import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import appointmentRoutes from './routes/appointment.route.js';
import blogRouts from './routes/blogRouts.js';
 
import productRoutes from './routes/productRoutes.js';  

import contactusRoutes from './routes/contactus.route.js';
import commentRoutes from './routes/commentRoutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(cors());
app.use(express.json());

 


app.use('/api/appointments', appointmentRoutes);
app.use('/api/blogs', blogRouts);
app.use('/api/contactus', contactusRoutes);
app.use('/api/products', productRoutes);
app.use('/api/comments', commentRoutes);


app.listen(process.env.PORT,() =>{
    console.log(`Server running on port ${process.env.PORT}`);
});


