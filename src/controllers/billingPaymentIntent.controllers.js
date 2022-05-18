// Below is used to verify the reponses match; uncomment to compare
// import { billingPaymentIntent, chargebeePaymentIntent } from '../services';

import { chargebeePaymentIntent } from '../services';

export const getBillingPaymentIntent = async (req, res) => {
	try {
		// const response2 = await billingPaymentIntent();

		const response = await chargebeePaymentIntent({
			amount: 0,
			currency_code: 'CAD',
		});

		if (response.http_status_code) {
			return res
				.status(response.http_status_code)
				.json(`${response.message}`);
		}

		return res.json({ ...response });
		// return res.json({ dataLocal: response2.data, dataChargebee: ...response });
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	}
};
