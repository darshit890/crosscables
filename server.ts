import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import PhonePeRoute from './routes/PhonePeRoute';
import bodyParser from 'body-parser';

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());

const port: number = 5000;

app.use('/api/phonepe', PhonePeRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
