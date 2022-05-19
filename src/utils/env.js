import dotenv from 'dotenv';
dotenv.config({
  // Change if .env needs to be in a different directory or has a different name
  path: `${__dirname}/../../.env`,
});

const ENV = process.env;

export default ENV;
