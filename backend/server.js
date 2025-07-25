import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/db.js';

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT;
app.get('/', (req, res) => {
  res.send('Welcome to the Check Appoint API!');
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port http://localhost:${PORT}`);
})