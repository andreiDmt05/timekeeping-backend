import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import attendanceRoutes from './routes/attendanceRoutes';

const app = express();

app.use(cors());
app.use(express.json());

// Mount attendance routes
app.use('/api/attendance', attendanceRoutes);

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () =>
      console.log(`Backend running on port ${PORT}`)
    );
  })
  .catch(console.error);