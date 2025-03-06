import { Request, Response } from 'express';
import { processCall } from '../services';

export const handleCall = async (req: Request, res: Response) => {
  try {
    const result = await processCall(req.body);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};