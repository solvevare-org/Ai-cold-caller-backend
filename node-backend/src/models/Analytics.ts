// filepath: /c:/Users/Ahmer/Downloads/AI cold caller/project 2/node-backend/src/models/Analytics.ts
import mongoose from 'mongoose';

const PerformanceSchema = new mongoose.Schema({
  day: String,
  calls: Number,
  success: Number,
});

const ConversionSchema = new mongoose.Schema({
  month: String,
  rate: Number,
});

const Performance = mongoose.model('Performance', PerformanceSchema);
const Conversion = mongoose.model('Conversion', ConversionSchema);

export { Performance, Conversion };