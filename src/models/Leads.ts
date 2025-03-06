// filepath: /c:/Users/Ahmer/Downloads/AI cold caller/project 2/node-backend/src/models/Leads.ts
import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  name: String,
  company: String,
  email: String,
  phone: String,
  location: String,
  status: String,
  lastContact: String,
});

const Lead = mongoose.model('Lead', LeadSchema);

export default Lead;