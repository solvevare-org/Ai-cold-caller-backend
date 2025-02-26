// filepath: /c:/Users/Ahmer/Downloads/AI cold caller/project 2/node-backend/src/controllers/settingsController.ts
import { Request, Response } from 'express';

let settings = {
  companyName: 'Solvevare',
  timeZone: 'ET',
  pushNotifications: true,
  callNotifications: true,
};

export const getSettings = (req: Request, res: Response) => {
  res.json(settings);
};

export const updateSettings = (req: Request, res: Response) => {
  settings = { ...settings, ...req.body };
  res.json(settings);
};