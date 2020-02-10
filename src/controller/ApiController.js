const ControllerDao = require('../db/ControllerDao')
const conn = new ControllerDao()

module.exports = {

  async getList(req, res) {
    conn.getNews((error, results, fields) => {
      if (error) res.json({ error: error, status: 404 })
      else res.json({ contents: results, status: 202 })
    })
  },

  async	getNew(req, res) {
    let id = req.params.id
    conn.getNew(id, (error, results, fields) => {
      if (error) res.json({ error: error, status: 404 })
      else res.json({ contents: results, status: 202 })
    })
  },

  async insertNew(req, res) {
    conn.insertNew(req.body, (error, results, fields) => {
      if (error) res.json({ error: error, status: 404 })
      else res.json({ contents: results, status: 202 })
    })
  },

  async updateNew(req, res){
    conn.updateNews(req.body, req.params.id, (error, results, fields) => {
      if (error) res.json({ error: error, status: 404 })
      else res.json({ contents: results, status: 202 })
    })
  }
}


