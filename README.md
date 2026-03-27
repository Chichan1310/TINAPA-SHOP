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

### Deploy to Render.com (Full-stack)
1. Push/merge to GitHub (triggers CI/CD tests)
2. Render Dashboard: New > Web Service
   - Connect GitHub repo (TINAPA-SHOP)
   - Runtime: **Docker**
   - docker-compose.prod.yml + .env (DATABASE_URL from Render Postgres)
3. Add Postgres DB service (internal connect)
4. Auto-deploys on push! (tests pass → live site)

**Build Command**: (auto)
**Start Command**: (auto Docker)

### Prod
`docker-compose -f docker-compose.prod.yml up`

See TODO.md for progress.

