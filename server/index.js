import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Could not connect to MongoDB', err);
});

const app = express();

app.listen(3000, () => {
    console.log('Server is Running on PORT 3000!');
});

app.use('/api/user', userRoutes);