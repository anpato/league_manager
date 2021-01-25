const winston = require('winston')
const winstonExpress = require('express-winston')
const logger = require('morgan')
const { nodeEnv } = require('../env')

const winstonLogger = winstonExpress.logger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    nodeEnv === 'production'
      ? (new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }))
      : new winston.transports.Console()
  ],
  msg: 'HTTP {{req.method}} {{req.url}}', // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
  expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
  colorize: true // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
})
module.exports = [
  require('cors')(),
  require('helmet')(),
  require('body-parser').json(),
  winstonLogger,
  logger('dev')
]
