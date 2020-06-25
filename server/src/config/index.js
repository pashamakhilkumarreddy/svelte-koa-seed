require('dotenv').config();

module.exports = {
  server: {
    PORT: process.env.PORT || 4000,
  },
  db: {
    mongodb: {
      DB_HOST: process.env.DB_HOST,
      DB_PORT: process.env.DB_PORT,
      DB_USER: process.env.DB_USER,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_NAME: process.env.DB_NAME,
    },
  },
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
};
