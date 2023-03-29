import express from 'express';
import { carRouter, motorRouter } from './Routes';

const app = express();

app.use('/cars', carRouter);
app.use('/motorcycles', motorRouter);

export default app;
