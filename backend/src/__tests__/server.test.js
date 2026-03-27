const request = require('supertest')
const app = require('../server')

describe('Backend API Tests', () => {
  test('GET /health returns OK', async () => {
    const res = await request(app).get('/health')
    expect(res.status).toBe(200)
    expect(res.body.status).toBe('OK')
  })

  test('GET /api/products returns array', async () => {
    const res = await request(app).get('/api/products')
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })
})

