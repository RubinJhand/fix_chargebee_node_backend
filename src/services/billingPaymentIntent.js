import { DEFAULT_API as axios } from '../config';

export const billingPaymentIntent = async () => {
	try {
		const response = await axios.get(`/billing/details/payment/generate`);

		return response;
	} catch (error) {
		return error
	}
};
