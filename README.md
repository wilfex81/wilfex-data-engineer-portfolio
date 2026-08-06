# Wilfex Kipchirchir - Data Engineer Portfolio

This repository contains a portfolio website showcasing my Data Engineering projects, technical skills, and professional experience. The site highlights end-to-end data engineering work, including data ingestion, ETL and ELT pipelines, data modeling, workflow orchestration, cloud infrastructure, and scalable data platforms built with modern tools.

## What’s Inside

- A polished landing page with a data-engineering-focused hero section
- An About section with technical skills and work experience
- A project gallery featuring three detailed case studies
- Scrollable project modals with images, findings, process notes, and recommendations
- SEO metadata, sitemap, and crawl configuration for the published site

## Featured Projects

- Lakehouse Data Warehouse - AWS S3, Databricks, dbt, Airflow, and Terraform project built around a governed medallion architecture
- Fintech ETL Pipeline - Production-oriented pipeline that ingests raw JSON events, applies Bronze/Silver/Gold modeling, and serves curated data through an API
- Event Ingestion Pipeline - JSON-to-tabular ingestion workflow that flattens nested payloads into analytics-ready CSV outputs
- E-commerce Data Pipeline - End-to-end data pipeline covering ingestion, transformation, orchestration, and dashboarding for transaction data

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui and Radix UI components
- Lucide icons
- React Router
- React Intersection Observer

## Project Structure

- `src/components` - reusable UI sections such as Hero, About, Projects, Navbar, Footer, and ProjectCard
- `src/pages` - route-level pages
- `src/lib` - shared helpers and utilities
- `src/blogs` - markdown content used by the app
- `public/project-images` - screenshots used in the project modals
- `public/sitemap.xml` and `public/robots.txt` - search engine crawl files

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm, pnpm, or bun

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint the codebase

```bash
npm run lint
```

## Deployment Notes

The app is configured as a static Vite site. The main HTML entry point lives at `index.html`, and the site metadata is set up for the GitHub Pages deployment path currently used by the project.

## Content Notes

- Project screenshots are served from `public/project-images`
- The project cards open a scrollable modal so longer case-study content stays readable
- External project links are intentionally disabled in the React portfolio UI for now because the portfolio pages themselves link to the project repositories
