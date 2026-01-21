import 'dotenv/config';
import express = require('express');
import cors = require('cors');
import mongoose from 'mongoose';

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// conexiunea la MongoDB
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// rute
app.get('/', (_req, res) => {
  res.send('Backend running');
});

// api/attendance etc.

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});