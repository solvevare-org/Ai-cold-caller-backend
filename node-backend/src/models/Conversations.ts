// filepath: /c:/Users/Ahmer/Downloads/AI cold caller/project 2/node-backend/src/models/Conversations.ts
import mongoose from 'mongoose';

const ConversationSchema = new mongoose.Schema({
  leadName: String,
  company: String,
  lastMessage: String,
  timestamp: String,
  status: String,
  duration: String,
});

const Conversation = mongoose.model('Conversation', ConversationSchema);

export default Conversation;