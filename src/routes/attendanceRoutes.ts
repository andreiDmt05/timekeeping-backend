import { Router } from 'express';
import Attendance from '../models/Attendance';

const router = Router();

// GET /api/attendance
router.get('/', async (_req, res) => {
  try {
    const data = await Attendance.find().sort({ date: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching attendance' });
  }
});

// POST /api/attendance
router.post('/', async (req, res) => {
  try {
    const attendance = new Attendance(req.body);
    const saved = await attendance.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Error saving attendance' });
  }
});

export default router;