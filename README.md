# Recipe Search using Typesense
This project implements a recipe search application powered by Typesense.
It enables fast, full-text search over large recipe datasets with filters
such as ingredients, nutrients, and food groups.

## Project Overview
- Backend search powered by Typesense
- Recipe and nutrition datasets processed and indexed
- Schema-driven indexing for accurate and fast search
- Designed as part of the MyYouthSpan healthy recipe search initiative

## Repository Structure
- data/  
  - raw/: Original recipe and nutrition datasets  
  - processed/: Cleaned and transformed datasets used for indexing  
- schemas/: Typesense collection schemas  
- scripts/: Data transformation and JSONL conversion scripts  
- typesense/: Typesense setup and configuration files  
- docs/: Project documentation and references  

## Features
- Fast keyword-based recipe search
- Support for structured fields like calories and nutrients
- Scalable search indexing using Typesense

## Tech Stack
- Typesense
- JavaScript / Node.js
- CSV / TSV to JSONL data processing
- Docker (for Typesense setup)

## Status
Initial version with dataset processing and search indexing completed.
UI and advanced filtering under active development.
