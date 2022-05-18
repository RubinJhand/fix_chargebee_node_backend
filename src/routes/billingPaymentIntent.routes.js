import { Router } from 'express';

import { getBillingPaymentIntent } from '../controllers';

const router = Router();

router.get('/billing/details/payment/generate', getBillingPaymentIntent);

export default router;
