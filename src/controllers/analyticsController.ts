// filepath: /c:/Users/Ahmer/Downloads/AI cold caller/project 2/node-backend/src/controllers/analyticsController.ts
import { Request, Response } from 'express';
import { Performance, Conversion } from '../models/Analytics';

const performanceData = [
  { day: 'Mon', calls: 120, success: 80 },
  { day: 'Tue', calls: 150, success: 95 },
  { day: 'Wed', calls: 180, success: 120 },
  { day: 'Thu', calls: 140, success: 85 },
  { day: 'Fri', calls: 160, success: 100 },
];

const conversionData = [
  { month: 'Jan', rate: 25 },
  { month: 'Feb', rate: 30 },
  { month: 'Mar', rate: 28 },
  { month: 'Apr', rate: 35 },
  { month: 'May', rate: 32 },
  { month: 'Jun', rate: 40 },
];

export const getPerformanceData = async (req: Request, res: Response) => {
  try {
    const performanceData = await Performance.find();
    res.json(performanceData);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getConversionData = async (req: Request, res: Response) => {
  try {
    const conversionData = await Conversion.find();
    res.json(conversionData);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};