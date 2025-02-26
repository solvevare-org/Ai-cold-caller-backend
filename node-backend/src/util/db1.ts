import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
  mongoose.set('strictQuery', true);
  console.log('Establishing connection to database...');
  try {
    await mongoose.connect(process.env.MONGO_URI as string)
      .then(() => {
        console.log('DB CONNECTED');
      });
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;