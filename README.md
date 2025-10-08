# TechBlog - React.js + Node.js (MVC Architecture)

A professional blogging platform with **React.js frontend** and **Node.js Express backend** following **MVC (Model-View-Controller)** architecture. Fully containerized with **Docker** and **Docker Compose**.

![React.js](https://img.shields.io/badge/React-18-61DAFB) ![Node.js](https://img.shields.io/badge/Node.js-Backend-339933) ![Express](https://img.shields.io/badge/Express-4-000000) ![MVC](https://img.shields.io/badge/Architecture-MVC-orange) ![SQLite](https://img.shields.io/badge/SQLite-3-003B57) ![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED)

---

## ✨ Features

- 📝 **Rich Text Editor** - WYSIWYG editor with React Quill
- 🗄️ **SQLite Database** - Lightweight, serverless database
- 🎨 **Medium-like UI** - Professional, clean design
- 🏗️ **MVC Architecture** - Professional backend structure
- 🐳 **Docker Support** - Fully containerized application
- 🔌 **RESTful API** - Clean, organized routes
- 🏷️ **Categories & Tags** - Organize posts by topics
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Fast Performance** - Optimized React frontend

---

## 🐳 Docker Deployment (Recommended)

### Quick Start with Docker Compose

```bash
# 1. Build and start all services
docker-compose up -d

# 2. Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000
```

### Available Docker Commands

```bash
# Start services
docker-compose up -d

# Start with logs
docker-compose up

# Stop services
docker-compose down

# Rebuild images
docker-compose build

# View logs
docker-compose logs -f

# Stop and remove volumes
docker-compose down -v
```

### Development Mode with Docker

```bash
# Start in development mode (with hot reload)
docker-compose -f docker-compose.dev.yml up

# Stop development services
docker-compose -f docker-compose.dev.yml down
```

---

## 🏗️ Professional Backend Structure (MVC)

```
backend/
├── models/                      # Data Models
│   └── Post.js                  # Post model
├── controllers/                 # Business Logic
│   └── postController.js        # Request handlers
├── routes/                      # API Routes
│   ├── index.js                 # Main router
│   ├── postRoutes.js            # Post routes
│   └── categoryRoutes.js        # Category routes
├── config/                      # Configuration
│   └── database.js              # Database setup
├── middleware/                  # Middleware
│   └── errorHandler.js          # Error handling
├── scripts/                     # Utility Scripts
│   └── seed.js                  # Database seeder
├── Dockerfile                   # Production Docker image
├── Dockerfile.dev               # Development Docker image
└── server.js                    # Entry point
```

---

## 📁 Complete Project Structure

```
Blogging/
├── frontend/                    # React.js Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── api/
│   ├── public/
│   ├── Dockerfile               # Production
│   ├── Dockerfile.dev           # Development
│   ├── nginx.conf               # Nginx config
│   └── package.json
│
├── backend/                     # Node.js Backend (MVC)
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── config/
│   ├── middleware/
│   ├── scripts/
│   ├── Dockerfile               # Production
│   ├── Dockerfile.dev           # Development
│   └── server.js
│
├── docker-compose.yml           # Production compose
├── docker-compose.dev.yml       # Development compose
├── package.json                 # Root scripts
└── README.md
```

---

## 🚀 Local Development (Without Docker)

### Installation

```bash
# Install all dependencies (Windows PowerShell)
npm install
cd frontend
npm install
cd ..
cd backend
npm install
cd ..

# OR (Linux/Mac)
npm run install:all
```

### Seed Database with Test Data

```bash
# Windows PowerShell
cd backend
npm run seed
cd ..

# OR (Linux/Mac)
npm run seed
```

**Test User Accounts** (all passwords: `password123`):
- `john@example.com` - John Doe
- `sarah@example.com` - Sarah Johnson
- `mike@example.com` - Mike Chen
- `emma@example.com` - Emma Wilson

### Run Application

Open **TWO terminals**:

**Terminal 1 - Backend:**
```powershell
# Windows PowerShell
cd backend
npm run dev

# Backend will run on http://localhost:5000
```

**Terminal 2 - Frontend:**
```powershell
# Windows PowerShell
cd frontend
npm start

# Frontend will run on http://localhost:3000
```

---

## 🐳 Docker Architecture

### Services

**Backend Service:**
- Container: `techblog-backend`
- Port: `5000`
- Base Image: `node:18-alpine`
- Features: Health check, volume persistence

**Frontend Service:**
- Container: `techblog-frontend`
- Port: `3000` (mapped to internal 80)
- Base Image: `nginx:alpine`
- Features: Multi-stage build, reverse proxy

### Networking

- Bridge network: `techblog-network`
- Frontend can communicate with backend via service name
- API proxied through Nginx

### Volumes

- `backend-data`: Persists SQLite database
- Database mounted at `/app/blog.db`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/posts` | Get all posts |
| POST | `/api/posts` | Create post |
| GET | `/api/posts/:id` | Get post by ID |
| GET | `/api/posts/slug/:slug` | Get post by slug |
| PUT | `/api/posts/:id` | Update post |
| DELETE | `/api/posts/:id` | Delete post |
| GET | `/api/categories` | Get categories |
| GET | `/api/tags` | Get tags |

---

## 📝 NPM Scripts

### Root Level

```bash
npm run install:all      # Install all dependencies
npm run dev:backend      # Run backend with nodemon
npm run dev:frontend     # Run frontend dev server
npm run seed             # Seed database
```

### Backend

```bash
npm start        # Production server
npm run dev      # Development with nodemon
npm run seed     # Seed database
```

### Frontend

```bash
npm start        # Development server
npm run build    # Production build
npm test         # Run tests
```

---

## 🐳 Docker Best Practices

### Production Images

✅ Multi-stage builds (frontend)  
✅ Alpine Linux for smaller images  
✅ Health checks configured  
✅ Security headers in Nginx  
✅ Production-only dependencies  
✅ .dockerignore for faster builds  

### Development Images

✅ Hot reload support  
✅ Volume mounting for code  
✅ All dev dependencies included  
✅ Faster build times  

---

## 🚀 Deployment Options

### 1. Docker Compose (Easiest)

```bash
# On your server
git clone <repository>
cd Blogging
docker-compose up -d
```

### 2. Docker Hub

```bash
# Build and push images
docker build -t yourusername/techblog-backend:latest ./backend
docker build -t yourusername/techblog-frontend:latest ./frontend

docker push yourusername/techblog-backend:latest
docker push yourusername/techblog-frontend:latest

# Pull and run on server
docker-compose pull
docker-compose up -d
```

### 3. Container Platforms

Deploy to:
- **Docker Swarm** - Container orchestration
- **Kubernetes** - Enterprise orchestration
- **AWS ECS** - Amazon container service
- **Google Cloud Run** - Serverless containers
- **Azure Container Instances** - Microsoft containers
- **Railway** - Simple deployment
- **Render** - Easy Docker hosting

---

## 🔧 Environment Variables

### Backend (.env)

```env
NODE_ENV=production
PORT=5000
```

### Frontend (.env)

```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Docker Compose Override

Create `docker-compose.override.yml`:

```yaml
version: '3.8'
services:
  backend:
    environment:
      - PORT=8080
    ports:
      - "8080:8080"
```

---

## 📊 Docker Commands Cheat Sheet

```bash
# Build specific service
docker-compose build backend

# Restart a service
docker-compose restart frontend

# View service logs
docker-compose logs backend -f

# Execute command in container
docker-compose exec backend npm run seed

# Scale service (if needed)
docker-compose up -d --scale backend=2

# Remove everything (including volumes)
docker-compose down -v --remove-orphans

# Prune unused Docker resources
docker system prune -a
```

---

## 🔍 Troubleshooting

### Port Already in Use

```bash
# Change ports in docker-compose.yml
ports:
  - "3001:80"  # Frontend
  - "5001:5000"  # Backend
```

### Rebuild After Code Changes

```bash
docker-compose build --no-cache
docker-compose up -d
```

### Database Issues

```bash
# Reset database
docker-compose down -v
docker-compose up -d
docker-compose exec backend npm run seed
```

### View Container Status

```bash
docker-compose ps
docker-compose logs
```

---

## 🎯 Benefits of Docker

### ✅ Consistency
- Same environment everywhere
- No "works on my machine" issues
- Easy onboarding for new developers

### ✅ Isolation
- Each service in its own container
- No dependency conflicts
- Clean system

### ✅ Scalability
- Easy to scale services
- Load balancing ready
- Microservices-ready architecture

### ✅ Portability
- Run anywhere Docker is installed
- Cloud-agnostic deployment
- Easy migration between environments

---

## 🛠️ Technology Stack

### Frontend
- **React** 18.2
- **React Router DOM** 6
- **React Quill** - Rich text editor
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Nginx** - Production server

### Backend
- **Node.js** 18
- **Express** 4
- **sql.js** - SQLite implementation
- **slugify** - URL slugs
- **cors** - CORS handling

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Orchestration
- **Nginx** - Reverse proxy
- **Alpine Linux** - Base images

---

## 📚 Documentation

### Docker Configuration

- `Dockerfile` - Production image definition
- `Dockerfile.dev` - Development image
- `docker-compose.yml` - Production orchestration
- `docker-compose.dev.yml` - Development orchestration
- `.dockerignore` - Exclude files from image

### Nginx Configuration

- `nginx.conf` - Reverse proxy rules
- API requests proxied to backend
- Client-side routing support
- Static asset caching
- Security headers

---

## 🎉 Summary

Your blogging platform now features:

✅ **Professional MVC Architecture**  
✅ **Medium-like UI Design**  
✅ **Fully Dockerized**  
✅ **Docker Compose Orchestration**  
✅ **Development & Production Modes**  
✅ **Health Checks Configured**  
✅ **Nginx Reverse Proxy**  
✅ **Volume Persistence**  
✅ **Multi-stage Builds**  
✅ **Production Ready**  

---

## Quick Start Guide

```bash
# Method 1: Docker (Recommended)
docker-compose up -d

# Method 2: Local Development
npm run install:all
npm run seed
# Terminal 1: cd backend && npm run dev
# Terminal 2: cd frontend && npm start
```

**Access Application:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

---

**Built with ❤️ using React.js, Node.js (MVC), Express, SQLite, and Docker**

**Happy Coding! 🚀**
