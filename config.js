// config.js
const dotenv = require('dotenv');

dotenv.config({path: __dirname + '/.env'});

module.exports = {
  openaiKey: process.env.OPENAI_API_KEY,
  model: process.env.MODEL
};