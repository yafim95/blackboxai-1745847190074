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

---

## Installation and Running the WebApp Locally

Follow these steps carefully in the exact order to set up and run the webapp locally:

1. **Clone the repository**

```bash
git clone https://github.com/yafim95/blackboxai-1745847190074.git
cd blackboxai-1745847190074
```

2. **Install Backend Dependencies**

```bash
cd backend
npm install
```

3. **Start Backend Server**

```bash
npx ts-node src/index.ts
```

> **Note:** The backend server runs on port 4000 by default.

4. **Open a new terminal window/tab**

5. **Install Frontend Dependencies**

```bash
cd frontend
npm install
```

6. **Start Frontend Server**

```bash
npm run dev
```

> **Note:** The frontend server runs on port 3000 by default and proxies API requests to the backend server on port 4000.

7. **Access the WebApp**

Open your browser and navigate to:

```
http://localhost:3000/dashboard
```

---

## Rebranding and Modifying the WebApp

... (rest of the existing README content remains unchanged)
