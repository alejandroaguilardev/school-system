# School System

This is a school system built with Node 20, pnpm, and MySQL or Docker.

## Requirements

* Node 20
* pnpm
* MySQL or Docker

## Installation

1. Install pnpm: `npm install -g pnpm`
2. Install dependencies: `pnpm i`
3. Enable apps for server and web: `pnpm en apps server and web`
4. Rename `.env.template` to `.env`
5. Start Docker container in detached mode: `docker compose up -d`
6. Start development server: `pnpm dev`

## Improvements to Implement

### General

* Validate `.env` variables existence
* Dockerize the APP (currently only DB is dockerized)
* Implement sockets

### Frontend

* Implement testing in frontend
* Complete advanced filters (only interfaces were implemented)
* Design in Figma (generic design was done)

### Backend

* Document Swagger dto info
* Tasks that were missed:
	+ Finish pattern criteria
	+ Implement Value Object for field validation in domain layer
	+ Replace Express with Fastify
	+ Log error 500 exceptions in backend
	+ Consider implementing Rate limit, Helmet, and CSRF (not taken into account)
	+ Add more test cases in backend