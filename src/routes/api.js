const express = require('express')
const routes = express.Router()

const ApiController = require('../controller/ApiController')

routes.get('/publish', ApiController.getList)

routes.get('/publish/:id', ApiController.getNew)

routes.post('/publish/', ApiController.insertNew)

routes.put('/publish/:id', ApiController.updateNew)

routes.delete('/publish/:id', ApiController.deleteNew)

module.exports = routes