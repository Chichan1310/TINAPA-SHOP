FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --only=production --no-package-lock

FROM node:20-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
COPY prisma ./prisma
RUN npx prisma generate
EXPOSE 3001
CMD ["npm", "start"]

