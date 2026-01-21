import { Router } from 'express';
import Attendance from '../models/Attendance';

const router = Router();

// POST /api/attendance
router.post('/', async (req, res) => {
  try {
    const { employeeName, date, startTime, endTime } = req.body;

    const attendance = new Attendance({
      employeeName,
      date,
      startTime,
      endTime,
    });

    const saved = await attendance.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Error saving attendance', err });
  }
});

// GET /api/attendance
router.get('/', async (_req, res) => {
    try {
      const data = await Attendance.find().sort({ date: -1 });
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching attendance', err });
    }
  });

export default router;