// filepath: /c:/Users/Ahmer/Downloads/AI cold caller/project 2/node-backend/src/models/Dashboard.ts
import mongoose from 'mongoose';

const HourlyDataSchema = new mongoose.Schema({
  hour: String,
  calls: Number,
});

const CampaignSchema = new mongoose.Schema({
  name: String,
  calls: Number,
});

const HourlyData = mongoose.model('HourlyData', HourlyDataSchema);
const DashboardCampaign = mongoose.model('DashboardCampaign', CampaignSchema);

export { HourlyData, DashboardCampaign };