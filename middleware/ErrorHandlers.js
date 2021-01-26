class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}

const handleError = (err, res) => {
  const { statusCode, message } = err
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message
  })
}

const errorMethods = {
  default: (error) => new ErrorHandler(400, error.message),
  custom: (status, message) => new ErrorHandler(status, message)
}

module.exports = {
  ErrorHandler,
  handleError,
  errorMethods
}
