const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');
const env = process.env.NODE_ENV || 'development';

dotenv.config({ path: path.join(__dirname, `../../.env.${env}`) });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(3100),
    MONGODB_URL: Joi.string().required().description('Mongo DB url'),
    POKEMON_API_BASE_URL: Joi.string().required().description('Pokemon API base url'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongoose: {
    url: envVars.MONGODB_URL,
  },
};
