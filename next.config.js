const withImages = require('next-images');
require('dotenv').config();

module.exports = withImages({
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    DB_NAME: process.env.DB_NAME,
    WEB_URI: process.env.WEB_URI,
    SESSION_SECRET: process.env.SESSION_SECRET,
  },
});
