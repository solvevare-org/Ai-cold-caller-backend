import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/index';
import connectDB from './util/db';
import initData from './initData';

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB().then(() => {
  // Initialize data
  initData();
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});