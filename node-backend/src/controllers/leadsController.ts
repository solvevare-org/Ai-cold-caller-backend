// filepath: /c:/Users/Ahmer/Downloads/AI cold caller/project 2/node-backend/src/controllers/leadsController.ts
import { Request, Response } from 'express';
import Lead from '../models/Leads';

const leadsData = [
  {
    id: 1,
    name: 'John Smith',
    company: 'Tech Solutions Inc',
    email: 'john.smith@techsolutions.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    status: 'New',
    lastContact: '2024-02-03',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    company: 'Healthcare Plus',
    email: 'sarah.j@healthcareplus.com',
    phone: '+1 (555) 234-5678',
    location: 'Los Angeles, USA',
    status: 'Contacted',
    lastContact: '2024-02-02',
  },
  {
    id: 3,
    name: 'Michael Chen',
    company: 'Global Finance Ltd',
    email: 'm.chen@globalfinance.com',
    phone: '+1 (555) 345-6789',
    location: 'Chicago, USA',
    status: 'Qualified',
    lastContact: '2024-02-01',
  },
];

export const getLeads = async (req: Request, res: Response) => {
  try {
    const leadsData = await Lead.find();
    res.json(leadsData);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const createLead = async (req: Request, res: Response) => {
  try {
    const newLead = new Lead(req.body);
    await newLead.save();
    res.status(201).json(newLead);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteLead = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Lead.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};