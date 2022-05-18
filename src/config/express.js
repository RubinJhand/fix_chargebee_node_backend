import express, { json, urlencoded } from 'express';
import cors from 'cors';

import CORS_CONFIG from './cors';

import { billingPaymentIntent } from '../routes';

const app = express();

app.use(cors(CORS_CONFIG));

app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.use(billingPaymentIntent);

app.get('/', (req, res) => {
	res.json({ data: 'Hello World!' });
});

export default app;
