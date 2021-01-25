const dependencies = require('./config/dependencies')
const { port } = require('./env')
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
