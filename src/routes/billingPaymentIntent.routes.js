import { Router } from 'express';

import { getBillingPaymentIntent } from '../controllers';

const router = Router();

router.get('/billing', getBillingPaymentIntent);

export default router;
