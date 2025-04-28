# Procurement Management WebApp - Modular Scaffold

This repository contains a fully modular, production-ready scaffold for a Procurement Management WebApp with built-in AI Agent Analyzers. The entire application is driven by JSON configuration files, allowing easy rebranding and modification without manual code changes.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Rebranding and Modifying the WebApp](#rebranding-and-modifying-the-webapp)
- [Frontend](#frontend)
- [Backend](#backend)
- [AI Service](#ai-service)
- [Infrastructure](#infrastructure)
- [CI/CD Pipeline](#cicd-pipeline)
- [Contributing](#contributing)
- [License](#license)

---

## Project Structure

- `/frontend` - Next.js + React + TypeScript frontend with Tailwind CSS, shadcn/ui, Lucide icons, Framer Motion, and Storybook.
- `/backend` - Node.js + Express backend with TypeScript, OpenAPI validation, JWT authentication, and Prisma ORM.
- `/ai` - AI orchestration service using LangChain, vector store integration, and message queue microservice.
- `/config` - JSON configuration files driving entities, roles, AI providers, theme, and feature toggles.
- `/infra` - Dockerfiles, docker-compose.yml, GitHub Actions CI workflows, and Kubernetes Helm/Terraform stubs.
- `/design` - Tailwind config overrides, design tokens, and style guide stubs.

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- Docker and Docker Compose
- npm or yarn package manager

### Installation

Each service has its own dependencies. You can install them individually or use Docker for containerized setup.

---

## Running the Application

### Using Docker Compose (Recommended)

1. Build and start all services:

```bash
docker-compose up --build
```

2. Access the frontend at [http://localhost:3000](http://localhost:3000)

3. Backend API runs on port 4000, AI service on port 5000.

### Running Locally

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

#### Backend

```bash
cd backend
npm install
npm run start
```

#### AI Service

```bash
cd ai
npm install
npm run start
```

---

## Rebranding and Modifying the WebApp

The entire application is driven by JSON configuration files located in `/config`. To rebrand or modify the webapp:

### 1. Modify Entities

Edit `config/entities.json` to add, remove, or rename domain entities. Each entity defines keys, labels, API paths, reference ID patterns, and fields.

Example: Adding a new entity will automatically generate CRUD endpoints, UI pages, and menu items.

### 2. Update Roles and Permissions

Edit `config/roles.json` to define user roles and their permissions matrix.

### 3. Configure AI Providers and Features

Edit `config/settings.json` to toggle features, set AI provider credentials, model settings, and compliance rules.

### 4. Customize Theme

Edit `config/theme.json` and `/design` files to update color palettes, typography, spacing, and dark/light mode variables.

### 5. Regenerate OpenAPI Spec

The backend OpenAPI spec is auto-generated from `entities.json` and `roles.json`. Re-run the scaffold or build process to update API docs.

### 6. Extend Frontend Components

Frontend pages and components dynamically read labels, routes, and schemas from config files. Extend or customize components in `/frontend/components` as needed.

---

## Frontend

- Built with Next.js, React, and TypeScript.
- Uses Tailwind CSS with custom theme and dark/light mode toggle.
- UI components from shadcn/ui and Lucide icons.
- Framer Motion for animations.
- Storybook for component documentation and testing.

---

## Backend

- Node.js with Express and TypeScript.
- JWT authentication and role-based access control.
- OpenAPI validation middleware.
- Prisma ORM for database models.
- Auto-generated CRUD and AI endpoints per entity.

---

## AI Service

- LangChain orchestration with support for multiple AI providers.
- Vector store integration (Pinecone, Weaviate, Qdrant).
- Message queue microservice with BullMQ or RabbitMQ.
- Compliance analyzer and interactive chatbot chains.
- Usage telemetry and monitoring hooks.

---

## Infrastructure

- Dockerfiles for each service.
- docker-compose.yml for local development.
- GitHub Actions CI workflows for linting, building, testing, and deployment.
- Kubernetes Helm charts or Terraform stubs for staging and production.

---

## CI/CD Pipeline

- Lint, build, and test jobs for frontend, backend, and AI services.
- Storybook deployment to GitHub Pages.
- Docker image build and push.
- Deployment jobs for frontend (Vercel) and backend/AI (AWS Fargate or Heroku).

---

## Contributing

Contributions are welcome. Please follow the existing code style and add tests for new features.

---

## License

MIT License

---

For any questions or support, please contact the project maintainer.
