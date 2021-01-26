require('dotenv').config()
module.exports = {
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV,
  saltRounds: parseInt(process.env.SALT_ROUNDS)
}
