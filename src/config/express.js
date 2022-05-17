import express, { json, urlencoded } from 'express';
import cors from 'cors';

import CORS_CONFIG from './cors';

const app = express();

app.use(cors(CORS_CONFIG));

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({data: 'Hello World!'});
});

export default app;