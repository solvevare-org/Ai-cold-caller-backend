// filepath: /c:/Users/Ahmer/Downloads/AI cold caller/project 2/node-backend/src/controllers/campaignsController.ts
import { Request, Response } from 'express';
import Campaign from '../models/Campaigns';

const campaignsData = [
  {
    id: 1,
    name: 'Tech Startups Outreach',
    status: 'Active',
    progress: 65,
    leads: 450,
    calls: 280,
    success: 180,
    startDate: '2024-01-15',
    endDate: '2024-03-15',
  },
  {
    id: 2,
    name: 'Healthcare Solutions',
    status: 'Paused',
    progress: 45,
    leads: 230,
    calls: 150,
    success: 89,
    startDate: '2024-02-01',
    endDate: '2024-04-01',
  },
  {
    id: 3,
    name: 'Financial Services',
    status: 'Active',
    progress: 80,
    leads: 680,
    calls: 520,
    success: 420,
    startDate: '2024-01-01',
    endDate: '2024-03-31',
  },
];

export const getCampaigns = async (req: Request, res: Response) => {
  try {
    const campaignsData = await Campaign.find();
    res.json(campaignsData);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const createCampaign = async (req: Request, res: Response) => {
  try {
    const newCampaign = new Campaign(req.body);
    await newCampaign.save();
    res.status(201).json(newCampaign);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};