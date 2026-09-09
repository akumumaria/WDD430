# Akumu Maria Paris - Portfolio Website

A modern, responsive portfolio website built with Next.js App Router, TypeScript, and Tailwind CSS. This project showcases web development projects and technical skills through a clean, professional interface.

## Features

- **Home Page**: Personal introduction with featured projects displayed in responsive cards
- **About Page**: Education background and technical skills showcase
- **Project Cards**: Reusable components displaying project information with conditional link rendering
- **Skill Cards**: Custom components showing technical proficiency levels
- **API Route**: `/api/hello` endpoint returning JSON response
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS
- **Navigation**: Sticky header with smooth routing between pages

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Server Components** - Optimized server-side rendering

## Project Structure

```
portfolio/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page with education and skills
│   ├── api/
│   │   └── hello/
│   │       └── route.ts      # API route returning JSON
│   ├── layout.tsx            # Root layout with Header and Footer
│   ├── page.tsx              # Home page with project showcase
│   └── globals.css           # Global styles
├── components/
│   ├── Footer.tsx            # Footer component
│   ├── Header.tsx            # Navigation header
│   ├── ProjectCard.tsx       # Individual project card with conditional rendering
│   ├── ProjectList.tsx       # Container for project cards
│   └── SkillCard.tsx         # Custom skill display component
```

## Custom Components

### ProjectCard
- TypeScript interface for props (title, description, technologies, link)
- Conditional rendering of project link (only renders when URL is provided)
- Styled with Tailwind CSS classes
- Server Component (no `use client` directive)

### SkillCard
- Custom component for displaying technical skills
- TypeScript interface for props (skillName, proficiency, icon)
- Displays skill icon, name, and proficiency level
- Used on About page to showcase technical abilities

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Endpoint

Test the API route:

```bash
curl http://localhost:3000/api/hello
```

Returns:
```json
{
  "message": "Hello from Next.js API!"
}

