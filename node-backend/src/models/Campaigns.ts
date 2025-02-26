// filepath: /c:/Users/Ahmer/Downloads/AI cold caller/project 2/node-backend/src/models/Campaigns.ts
import mongoose from 'mongoose';

const CampaignSchema = new mongoose.Schema({
  name: String,
  status: String,
  progress: Number,
  leads: Number,
  calls: Number,
  success: Number,
  startDate: String,
  endDate: String,
});

const Campaign = mongoose.model('Campaign', CampaignSchema);

export default Campaign;