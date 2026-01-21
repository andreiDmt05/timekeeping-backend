import mongoose, { Schema, Document } from 'mongoose';

export interface IAttendance extends Document {
  employeeName: string;
  date: string;     // YYYY-MM-DD
  startTime: string; // HH:mm
  endTime: string;   // HH:mm
}

const AttendanceSchema = new Schema<IAttendance>({
  employeeName: { type: String, required: true },
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IAttendance>('Attendance', AttendanceSchema);