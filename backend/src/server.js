const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' }));
app.use(express.json());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// Seed data (simple products)
app.get('/api/seed', async (req, res) => {
  await prisma.product.createMany({
    data: [
      { name: 'Smoked Tinapa', price: 150000, stock: 50, description: 'Fresh smoked tinapa' },
      { name: 'Spicy Tinapa', price: 180000, stock: 30, description: 'Spicy variant' },
      { name: 'Tinapa Pack (5pcs)', price: 700000, stock: 20 },
    ],
    skipDuplicates: true,
  });
  res.json({ message: 'Seeded products' });
});

// Routes
app.get('/api/products', async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

app.get('/api/products/:id', async (req, res) => {
  const product = await prisma.product.findUnique({ where: { id: req.params.id } });
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

app.post('/api/cart', async (req, res) => {
  // Simple cart endpoint (in prod, use auth/JWT)
  res.json({ message: 'Cart added', cart: req.body });
});

app.post('/api/orders', async (req, res) => {
  const { userId, items, total } = req.body;
  const order = await prisma.order.create({
    data: { userId, items, total },
  });
  res.json(order);
});

app.get('/api/orders/:userId', async (req, res) => {
  const orders = await prisma.order.findMany({ where: { userId: req.params.userId } });
  res.json(orders);
});

// Health
app.get('/health', (req, res) => res.json({ status: 'OK' }));

const server = app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

process.on('SIGTERM', () => {
  prisma.$disconnect();
  server.close();
});

module.exports = app;

