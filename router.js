const router = require('express').Router()
const fs = require('fs')
fs.readdirSync('controllers').forEach((file) => {
  const controller = require(`./controllers/${file}`)
  controller.path && controller.router
    ? router.use(controller.path, controller.router)
    : null
})

module.exports = router
