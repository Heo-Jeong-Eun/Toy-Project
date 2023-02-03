import mongoose from 'mongoose';
import express from 'express';
import { userRouter } from './src/routes/user-routes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const { PORT, MONGO_URI } = process.env;

mongoose
  .set('strictQuery', true)
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB !!!');
  })
  .catch((e) => {
    console.log('error !!!');
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', userRouter);

app.listen(PORT, () => {
  console.log(`server is listening at localhost:${PORT}`);
});