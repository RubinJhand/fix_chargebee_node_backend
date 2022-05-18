import { toISOWithoutZulu } from "./timeConversion";

export const modifyPaymentIntent = (response) => {
  const {
    id, status, amount, gateway_account_id, expires_at, payment_method_type, created_at, modified_at, currency_code, gateway
  } = response.payment_intent;

  return {
    id,
    status: status.toUpperCase(),
    gateway,
    currencyCode: currency_code,
    modifiedAt: toISOWithoutZulu(modified_at),
    createdAt: toISOWithoutZulu(created_at),
    expiresAt: toISOWithoutZulu(expires_at),
    gatewayAccountId: gateway_account_id,
    amount,
    paymentMethodType: payment_method_type.toUpperCase(),
  };
};