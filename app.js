const dependencies = require('./config/dependencies')
const { port } = require('./env')
const { handleError } = require('./middleware/ErrorHandlers')
const router = require('./router')

class Server {
  constructor(port) {
    this.app = require('express')()
    this.port = port
  }

  initDependencies() {
    this.app.use(dependencies)
  }

  initRoutes() {
    this.app.use('/api', router)
    this.app.use((err, req, res, next) => handleError(err, res))
    this.app.use('*', (req, res) =>
      res.status(404).send({ status: 404, msg: 'Not Found' })
    )
  }

  start() {
    this.initDependencies()
    this.initRoutes()
    this.app.listen(this.port, () =>
      console.log(`Started On Port: ${this.port}`)
    )
  }
}

new Server(port).start()
