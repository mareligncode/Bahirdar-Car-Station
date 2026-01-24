import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import dbconnect from './config/database.js'
dbconnect()

dotenv.config();

const app = express();
const PORT=5000
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Bahir Dar Transportation System API' });
});


app.listen(PORT, () => {
  console.log("server runing on the port http://localhost:")
})