import { Router } from 'express';
import Attendance from '../models/Attendance';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// GET /api/attendance
router.get('/', authMiddleware, async (_req, res) => {
  try {
    const data = await Attendance.find().sort({ date: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching attendance' });
  }
});

// DELETE /api/attendance/:id
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Attendance.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Attendance not found' });
    }

    res.json({ message: 'Attendance deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting attendance' });
  }
});

// POST /api/attendance
router.post('/', authMiddleware, async (req, res) => {
  try {
    const attendance = new Attendance(req.body);
    const saved = await attendance.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Error saving attendance' });
  }
});

export default router;