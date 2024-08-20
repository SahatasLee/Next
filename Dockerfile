# Base image with Node.js and the necessary dependencies
FROM node:22-alpine3.19 AS base

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Start the Next.js app in production mode
CMD ["npm", "run", "start"]
