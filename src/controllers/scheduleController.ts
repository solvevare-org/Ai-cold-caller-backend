// filepath: /c:/Users/Ahmer/Downloads/AI cold caller/project 2/node-backend/src/controllers/scheduleController.ts
import { Request, Response } from 'express';
import Schedule from '../models/Schedule';

const scheduleData = [
  {
    id: 1,
    time: '09:00 AM',
    duration: '30 min',
    leadName: 'John Smith',
    company: 'Tech Solutions Inc',
    type: 'Follow-up Call',
    status: 'Scheduled',
  },
  {
    id: 2,
    time: '10:30 AM',
    duration: '45 min',
    leadName: 'Sarah Johnson',
    company: 'Healthcare Plus',
    type: 'Initial Contact',
    status: 'In Progress',
  },
  {
    id: 3,
    time: '02:00 PM',
    duration: '30 min',
    leadName: 'Michael Chen',
    company: 'Global Finance Ltd',
    type: 'Demo Call',
    status: 'Completed',
  },
];

export const getSchedule = async (req: Request, res: Response) => {
  try {
    const scheduleData = await Schedule.find();
    res.json(scheduleData);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const createSchedule = async (req: Request, res: Response) => {
  try {
    const { date, time, duration, leadName, company, type, status } = req.body;
    const newSchedule = new Schedule({ date, time, duration, leadName, company, type, status });
    await newSchedule.save();
    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};