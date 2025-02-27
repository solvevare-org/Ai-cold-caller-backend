// filepath: /c:/Users/Ahmer/Downloads/AI cold caller/project 2/node-backend/src/models/Schedule.ts
import mongoose from 'mongoose';

const ScheduleSchema = new mongoose.Schema({
  date: String,
  time: String,
  duration: String,
  leadName: String,
  company: String,
  type: String,
  status: String,
});

const Schedule = mongoose.model('Schedule', ScheduleSchema);

export default Schedule;