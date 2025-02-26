import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID as string;
const authToken = process.env.TWILIO_AUTH_TOKEN as string;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER as string;

const client = twilio(accountSid, authToken);

export const makeCall = async (to: string) => {
    try {
        const call = await client.calls.create({
            url: `${process.env.SERVER_URL}/twilio/voice-response`,
            to,
            from: twilioNumber,
        });
        return call.sid;
    } catch (error) {
        console.error("Twilio Call Error:", error);
        throw error;
    }
};
