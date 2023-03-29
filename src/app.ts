import express from 'express';
import { carRouter, motorRouter } from './Routes';

const app = express();

app.use('/car', carRouter);
app.use('/motorcycles', motorRouter);

export default app;
