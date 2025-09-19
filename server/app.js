import express from 'express';
import cors from 'cors';

// Route imports
import appointmentRoutes from './routes/appointment.route.js';
import blogRouts from './routes/BlogRouts.js';
import productRoutes from './routes/productRoutes.js';
import contactusRoutes from './routes/contactus.route.js';
import commentRoutes from './routes/commentRoutes.js';

// Create Express app (no network listen here so it can be reused in serverless)
const app = express();
app.use(cors());
app.use(express.json());

// Mount routes (keep existing /api prefix so frontend URLs stay the same)
app.use('/api/appointments', appointmentRoutes);
app.use('/api/blogs', blogRouts);
app.use('/api/contactus', contactusRoutes);
app.use('/api/products', productRoutes);
app.use('/api/comments', commentRoutes);

export default app;
