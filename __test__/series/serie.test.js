const request = require('supertest')
const app = require('../../app')
const Serie = require('../../server/models').Serie

describe.only('Serie', () => {
  beforeAll(() => {
    Serie.destroy({
      where: {},
      truncate: true
    })
  })

  describe("Test the serie's creation route", () => {
    it('should return a 201 status and a fulfiled object', () => {
      return request(app)
        .post('/api/series')
        .send({ description: '3 x 10' })
        .then(response => {
          expect(response.statusCode).toBe(201)
          expect(response.body).toHaveProperty('id')
          expect(response.body).toHaveProperty('description', '3 x 10')
        })
    })

    it('should return a 400 status and a error message when the serie already exists', () => {
      return request(app)
        .post('/api/series')
        .send({ description: '3 x 10' })
        .then(response => {
          expect(response.statusCode).toBe(400)
          expect(response.body).toHaveProperty('message', 'Serie already exists')
        })
    })
  })

//   describe("Test the exercise's get all route", () => {
//     it('should return 2 exercise objects', () => {
//       return request(app)
//         .post('/api/exercises')
//         .send({ name: 'Supino Inclinado' })
//         .then(() => request(app).get('/api/exercises'))
//         .then(response => {
//           expect(response.statusCode).toBe(200)
//           expect(response.body).toHaveLength(2)
//         })
//     })
//   })

//   describe("Test the exercise's get one route", () => {
//     it('should return 1 exercise object', () => {
//       return request(app)
//         .post('/api/exercises')
//         .send({ name: 'Supino Declinado' })
//         .then((creationResponse) => request(app).get(`/api/exercises/${creationResponse.body.id}`))
//         .then(response => {
//           expect(response.statusCode).toBe(200)
//           expect(response.body).toHaveProperty('name', 'Supino Declinado')
//         })
//     })
//   })

//   describe("Test the exercise's delete route", () => {
//     it('should return 1 exercise object', () => {
//       return request(app)
//         .post('/api/exercises')
//         .send({ name: 'Supino Vertical' })
//         .then((creationResponse) => request(app).delete(`/api/exercises/${creationResponse.body.id}`))
//         .then(response => {
//           expect(response.statusCode).toBe(200)
//           expect(response.body).toHaveProperty('message', 'Exercise removed')
//         })
//     })

//     it('should a error message when a non existig id is passed', () => {
//       return request(app)
//         .post('/api/exercises')
//         .send({ name: 'Supino Inexistente' })
//         .then((creationResponse) => request(app).delete(`/api/exercises/${creationResponse.body.id * -1}`))
//         .then(response => {
//           expect(response.statusCode).toBe(400)
//           expect(response.body).toHaveProperty('message', "Exercise doesn't exists")
//         })
//     })
//   })
})
