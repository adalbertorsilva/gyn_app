const serieController = require('../controllers').serieController

module.exports = (app) => {
  app.post('/api/series', serieController.create)
  app.get('/api/series', serieController.findAll)
  app.get('/api/series/:serieId', serieController.find)
  app.delete('/api/series/:serieId', serieController.destroy)
}
