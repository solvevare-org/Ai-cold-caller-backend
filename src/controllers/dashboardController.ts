// filepath: /c:/Users/Ahmer/Downloads/AI cold caller/project 2/node-backend/src/controllers/dashboardController.ts
import { Request, Response } from 'express';
import { HourlyData, DashboardCampaign } from '../models/Dashboard';

// const hourlyData = [
//   { hour: '9AM', calls: 30 },
//   { hour: '10AM', calls: 45 },
//   { hour: '11AM', calls: 35 },
//   { hour: '12PM', calls: 50 },
//   { hour: '1PM', calls: 60 },
//   { hour: '2PM', calls: 40 },
//   { hour: '3PM', calls: 55 },
//   { hour: '4PM', calls: 45 },
//   { hour: '5PM', calls: 65 },
//   { hour: '6PM', calls: 58 },
//   { hour: '7PM', calls: 42 },
//   { hour: '8PM', calls: 48 },
// ];

const campaigns = [
  { name: 'Tech Startups Outreach', calls: 450, status: 'Active' },
  { name: 'Healthcare Solutions', calls: 230, status: 'Active' },
  { name: 'Financial Services', calls: 680, status: 'Active' },
  { name: 'Retail Businesses', calls: 120, status: 'Inactive' },
];

// const insertHourlyData = async () => {
//   try {
//     await HourlyData.insertMany(hourlyData);
//     console.log('Hourly data inserted successfully');
//   } catch (error) {
//     console.error('Error inserting hourly data:', error);
//   }
// };

const insertCampaigns = async () => {
  try {
    await DashboardCampaign.insertMany(campaigns);
    console.log('Campaigns inserted successfully');
  } catch (error) {
    console.error('Error inserting campaigns:', error);
  }
};

// Call the functions to insert data
// insertHourlyData();
insertCampaigns();

export const getHourlyData = async (req: Request, res: Response) => {
  try {
    const hourlyData = await HourlyData.find();
    res.json(hourlyData);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getCampaigns = async (req: Request, res: Response) => {
  try {
    const campaigns = await DashboardCampaign.find({ status: 'Active' });
    console.log('Fetched active campaigns:', campaigns);
    res.json(campaigns);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    res.status(500).json({ error: (error as Error).message });
  }
};