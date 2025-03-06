import Campaign from './models/Campaigns';
import Lead from './models/Leads';
import Conversation from './models/Conversations';
import Schedule from './models/Schedule';
import { Performance, Conversion } from './models/Analytics';

const initData = async () => {
  try {
    // Check if collections are empty and insert initial data if necessary

    const campaignCount = await Campaign.countDocuments();
    if (campaignCount === 0) {
      await Campaign.insertMany([
        {
          name: "Campaign 1",
          status: "Active",
          progress: 50,
          leads: 100,
          calls: 200,
          success: 150,
          startDate: "2025-02-01",
          endDate: "2025-02-28",
        },
        // Add more initial campaigns if needed
      ]);
      console.log('Initial campaigns inserted');
    }

    const leadCount = await Lead.countDocuments();
    if (leadCount === 0) {
      await Lead.insertMany([
        {
          name: "John Doe",
          company: "Company A",
          email: "john.doe@example.com",
          phone: "123-456-7890",
          location: "New York",
          status: "New",
          lastContact: "2025-02-20",
        },
        // Add more initial leads if needed
      ]);
      console.log('Initial leads inserted');
    }

    const conversationCount = await Conversation.countDocuments();
    if (conversationCount === 0) {
      await Conversation.insertMany([
        {
          leadName: "John Doe",
          company: "Company A",
          lastMessage: "Looking forward to our meeting.",
          timestamp: "2025-02-20T10:00:00Z",
          status: "Positive",
          duration: "15m",
        },
        // Add more initial conversations if needed
      ]);
      console.log('Initial conversations inserted');
    }

    const scheduleCount = await Schedule.countDocuments();
    if (scheduleCount === 0) {
      await Schedule.insertMany([
        {
          time: "2025-02-21T10:00:00Z",
          duration: "30m",
          leadName: "John Doe",
          company: "Company A",
          type: "Call",
          status: "Scheduled",
        },
        // Add more initial schedules if needed
      ]);
      console.log('Initial schedules inserted');
    }

    const performanceCount = await Performance.countDocuments();
    if (performanceCount === 0) {
      await Performance.insertMany([
        { day: 'Mon', calls: 120, success: 80 },
        { day: 'Tue', calls: 150, success: 95 },
        // Add more initial performance data if needed
      ]);
      console.log('Initial performance data inserted');
    }

    const conversionCount = await Conversion.countDocuments();
    if (conversionCount === 0) {
      await Conversion.insertMany([
        { month: 'Jan', rate: 25 },
        { month: 'Feb', rate: 30 },
        // Add more initial conversion data if needed
      ]);
      console.log('Initial conversion data inserted');
    }

  } catch (error) {
    console.error('Error inserting initial data:', error);
  }
};

export default initData;