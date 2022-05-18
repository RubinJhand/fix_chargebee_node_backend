export const toISOWithoutZulu = (date) => {
	// convert date, which is in milliseconds, to ISO format without Zulu
	return new Date(Number(`${date}000`)).toISOString().slice(0, -5);
};
