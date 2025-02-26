// filepath: /c:/Users/Ahmer/Downloads/AI cold caller/project 2/node-backend/src/routes/index.ts
import { Router } from 'express';
import { handleCall } from '../controllers';
import { getSettings, updateSettings } from '../controllers/settingsController';
import { getSchedule, createSchedule } from '../controllers/scheduleController';
import { getPerformanceData, getConversionData } from '../controllers/analyticsController';
import { getCampaigns as getCampaignsData, createCampaign } from '../controllers/campaignsController';
import { getConversations, createConversation } from '../controllers/conversationsController';
import { getHourlyData, getCampaigns as getDashboardCampaigns } from '../controllers/dashboardController';
import { getLeads, createLead , deleteLead } from '../controllers/leadsController';

const router = Router();

router.post('/call', handleCall);
router.get('/settings', getSettings);
router.put('/settings', updateSettings);
router.get('/schedule', getSchedule);
router.post('/schedule', createSchedule);
router.get('/analytics/performance', getPerformanceData);
router.get('/analytics/conversion', getConversionData);
router.get('/campaigns', getCampaignsData);
router.post('/campaigns', createCampaign);
router.get('/conversations', getConversations);
router.post('/conversations', createConversation);
router.get('/dashboard/hourly', getHourlyData);
router.get('/dashboard/campaigns', getDashboardCampaigns);
router.get('/leads', getLeads);
router.delete('/leads', deleteLead);
router.post('/leads', createLead);

export default router;