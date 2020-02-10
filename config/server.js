const express = require('express')
const consign = require('consign')

const app = express()
app.use(express.json())

// Rotas
app.use('/api', require('../src/routes/api'))

// Implementando Controller e Banco
consign()
  .include('./src/controller')
  // .then('./db/')
  .into(app)

module.exports = app