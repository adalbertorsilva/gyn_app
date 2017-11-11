const exerciseController = require('../controllers').exerciseController

module.exports = (app) => {
  app.post('/api/exercises', exerciseController.create)
  app.get('/api/exercises', exerciseController.findAll)
  app.get('/api/exercises/:exerciseId', exerciseController.find)
  app.delete('/api/exercises/:exerciseId', exerciseController.destroy)
}
