import { chargebeePaymentIntent } from '../services';

export const getBillingPaymentIntent = async (req, res) => {
	try {
		const response = await chargebeePaymentIntent({
			amount: 0,
			currency_code: 'CAD',
		});

		if (response.http_status_code) {
			return res.status(response.http_status_code).json(`${response.message}`);
		}

		return res.json({ ...response });
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	}
};
