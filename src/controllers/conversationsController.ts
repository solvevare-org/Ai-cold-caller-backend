// filepath: /c:/Users/Ahmer/Downloads/AI cold caller/project 2/node-backend/src/controllers/conversationsController.ts
import { Request, Response } from 'express';
import Conversation from '../models/Conversations';


const conversationsData = [
  {
    id: 1,
    leadName: 'John Smith',
    company: 'Tech Solutions Inc',
    lastMessage: 'Discussed product features and pricing options...',
    timestamp: '10 mins ago',
    status: 'Positive',
    duration: '12:45',
  },
  {
    id: 2,
    leadName: 'Sarah Johnson',
    company: 'Healthcare Plus',
    lastMessage: 'Scheduled a follow-up demo for next week...',
    timestamp: '2 hours ago',
    status: 'Neutral',
    duration: '08:30',
  },
  {
    id: 3,
    leadName: 'Michael Chen',
    company: 'Global Finance Ltd',
    lastMessage: 'Requested more information about enterprise plan...',
    timestamp: '1 day ago',
    status: 'Positive',
    duration: '15:20',
  },
];

export const getConversations = async (req: Request, res: Response) => {
  try {
    const conversationsData = await Conversation.find();
    res.json(conversationsData);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const createConversation = async (req: Request, res: Response) => {
  try {
    const newConversation = new Conversation(req.body);
    await newConversation.save();
    res.status(201).json(newConversation);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};