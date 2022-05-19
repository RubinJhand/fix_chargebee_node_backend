import ENV from '../utils/env';

const CORS_CONFIG = {
	origin: ENV.CORS_ORIGIN,
	methods: 'GET',
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
	credentials: false,
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	preflightContinue: false,
};

export default CORS_CONFIG;
