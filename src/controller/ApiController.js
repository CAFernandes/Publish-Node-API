const ControllerDao = require('../db/ControllerDao')
const conn = new ControllerDao()

module.exports = {

  async getList(req, res) {
    conn.getNews((error, results, fields) => {
      if (error) res.json({ error })
      else res.json({ results })
    })
  },

  async	getNew(req, res) {
    let id = req.params.id
    conn.getNew(id, (error, results, fields) => {
      if (error) res.json({ error })
      else res.json({ results })
    })
  },

  async insertNew(req, res) {
    conn.insertNew(req.body, (error, results, fields) => {
      if (error) res.json({ error })
      else res.json({ results })
    })
  },

  async updateNew(req, res){
    conn.updateNews(req.body, req.params.id, (error, results, fields) => {
      if (error) res.json({ error })
      else res.json({ results })
    })
  },
  
  async deleteNew(req, res){
    conn.deleteNew(req.body, req.params.id, (error, results, fields) => {
      if (error) res.json({ error })
      else res.json({ results })
    })
  },

  async getLastPublish (req, res) {
    conn.getLastPublish((error, results, fields) => {
      if (error) res.json({ error })
      else res.json({ results })
    })
  }
}


