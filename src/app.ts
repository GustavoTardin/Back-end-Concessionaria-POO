import express from 'express';
import { carRouter, motorRouter } from './Routes';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();

app.use(express.json());

app.use('/cars', carRouter);
app.use('/motorcycles', motorRouter);
app.use(ErrorHandler.handle);

export default app;
