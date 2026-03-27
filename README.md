# TINAPA-SHOP

## Simple Shopping App for Tinapa Products

### Local Development
1. Clone repo & `cp .env.example .env` (update secrets)
2. `docker-compose up --build` (includes DB, backend API @ localhost:3001, frontend @ localhost:3000)
3. Backend: cd backend && npx prisma migrate dev
4. Access: http://localhost:3000

### Features
- Browse/Add Tinapa products to cart
- User auth, checkout/orders
- Responsive React UI

### CI/CD & Deploy
- GitHub Actions: Auto-test/build/deploy on push/PR
- Deploy: Render.com (backend/DB), Netlify (frontend)
  1. Fork/push to GitHub
  2. Render: New Web Service > GitHub repo > Docker for backend
  3. Netlify: Connect GitHub repo for frontend

### Prod
`docker-compose -f docker-compose.prod.yml up`

See TODO.md for progress.

