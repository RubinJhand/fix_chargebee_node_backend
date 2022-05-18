import ENV from "../utils/env";

const CORS_CONFIG = {
  origin: ENV.CORS_ORIGIN,
  methods: "GET",
  allowedHeaders: "Content-Type, Authorization",
  credentials: false,
  optionsSuccessStatus: 200,
  preflightContinue: false
};

export default CORS_CONFIG;