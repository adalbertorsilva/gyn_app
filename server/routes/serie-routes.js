const serieController = require('../controllers').serieController

module.exports = (app) => {
  app.post('/api/series', serieController.create)
}
