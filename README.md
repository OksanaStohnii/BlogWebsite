# Blog Website

A blog platform built with Express.js, TypeScript, and Nunjucks, featuring a public-facing blog and an administrative interface for managing posts.
All content is stored in a JSON file and rendered dynamically.

## Features

- Dynamic blog pages rendered with Nunjucks
- Blog posts loaded from a JSON data source
- Human-readable date formatting from Unix timestamps
- Individual post pages with slug-based routing
- Admin panel with:
  - creating posts
  - editing posts
  - deleting posts
- WYSIWYG editor (Quill) for post content
- HTML sanitization before saving
- MVC Pattern

## How to Run

### Install dependencies

```bash
npm install
```

### Running the project

```bash
npm run dev
```

### Open:

```bash
http://localhost:3000
```

### Admin panel:

```bash
http://localhost:3000/admin
```
