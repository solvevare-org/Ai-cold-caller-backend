import { Router } from "express";
import { makeCall } from "../services/twilioService";

const router = Router();

router.post("/makeCall", async (req, res) => {
    const { to } = req.body;
    if (!to) return res.status(400).json({ error: "Recipient phone number is required" });

    try {
        const callSid = await makeCall(to);
        res.status(200).json({ message: "Call initiated", callSid });
    } catch (error) {
        res.status(500).json({ error: "Failed to initiate call" });
    }
});

// Webhook for handling Twilio responses
router.post("/voice-response", (req, res) => {
    const twiml = new twilio.twiml.VoiceResponse();
    twiml.say("Hello! This is an AI-driven cold call. How can I assist you?");
    res.type("text/xml").send(twiml.toString());
});

export default router;
