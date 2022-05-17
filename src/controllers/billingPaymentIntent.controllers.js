import { billingPaymentIntent } from '../services';

export const getBillingPaymentIntent = async (req, res) => {
	try {
		const response = await billingPaymentIntent();

		if (response.data) {
			return res.json({ data: response.data });
		}

		return res.json({ data: 'No data found' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};
