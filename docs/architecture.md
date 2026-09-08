# OpenUtils Architecture

## Current Foundation

The current architecture is built on Fastify, ensuring a robust and lightweight HTTP foundation.

Client
  ↓
Fastify Application
  ↓
Routes
  ↓
Validation (Zod)
  ↓
Modules (Planned)
  ↓
Shared/Core Services (Planned)

## Directory Structure
- `src/server`: Contains the entry point to start the server.
- `src/app`: Application factory, decoupled from the server to allow easy testing.
- `src/config`: Environment and configuration layer.
- `src/core`: Core services and utilities (Planned).
- `src/modules`: Feature-specific modules, routes, and controllers (Planned).
- `src/shared`: Shared types, constants, and utilities.

## Future Plans (Not Implemented)
- Database (PostgreSQL)
- Key-Value Store (Redis)
- Job Queues / Workers
- Storage (S3)
- Authentication / API Keys
