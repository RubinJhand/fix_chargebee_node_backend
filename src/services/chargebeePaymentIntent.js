import { chargebee } from '../config';
import { GATEWAY } from '../constants';
import { modifyPaymentIntent } from '../utils/modifyPaymentIntent';

export const chargebeePaymentIntent = async (paymentIntent) => {
	try {
		const response = await chargebee.payment_intent
			.create({
				amount: paymentIntent.amount,
				currency_code: paymentIntent.currency_code,
				gateway_account_id: GATEWAY,
			})
			.request((error, result) => {
				if (error) return console.log(error);

				if (result.payment_intent) {
					return result;
				}
			});

		const modifiedResponse = modifyPaymentIntent(response);

		return modifiedResponse;
	} catch (error) {
		return error;
	}
};
