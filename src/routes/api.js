const express = require('express')
const routes = express.Router()

const ApiController = require('../controller/ApiController')

routes.get('/publish', ApiController.getList)

routes.get('/publish/:id', ApiController.getNew)

routes.put('/publish/', ApiController.insertNew)

routes.patch('/publish/:id', ApiController.updateNew)

module.exports = routes