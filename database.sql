-- ============================================================
-- Portfolio Database Schema
-- Run this entire block at once in Neon's SQL editor
-- ============================================================

BEGIN;

CREATE TABLE IF NOT EXISTS projects (
    id            SERIAL PRIMARY KEY,
    title         VARCHAR(255)  NOT NULL,
    description   TEXT          NOT NULL,
    technologies  JSONB         NOT NULL DEFAULT '[]',
    type          VARCHAR(20)   NOT NULL DEFAULT 'school', -- 'school' | 'opensource'
    link          VARCHAR(500),
    created_at    TIMESTAMP     DEFAULT NOW(),
    updated_at    TIMESTAMP     DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_projects_technologies ON projects USING GIN (technologies);

INSERT INTO projects (title, description, technologies, type, link) VALUES
(
    'Full-Stack E-Commerce Platform',
    'A comprehensive e-commerce solution with user authentication, product management, and payment integration.',
    '["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"]',
    'opensource',
    'https://github.com/akumu-maria/e-commerce-platform'
),
(
    'Task Management Application',
    'A collaborative task management tool with real-time updates and team collaboration features.',
    '["React", "TypeScript", "Firebase", "Tailwind CSS"]',
    'school',
    'https://github.com/akumu-maria/task-manager'
),
(
    'Personal Finance Tracker',
    'A budgeting app that lets users track income, expenses, and savings goals with visual charts and monthly reports.',
    '["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Chart.js", "Tailwind CSS"]',
    'school',
    'https://github.com/akumu-maria/finance-tracker'
),
(
    'Recipe Sharing Platform',
    'A community-driven platform where users can post, search, and save recipes with ingredient filtering and step-by-step cooking mode.',
    '["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Tailwind CSS"]',
    'opensource',
    'https://github.com/akumu-maria/recipe-sharing'
),
(
    'Real-Time Chat Application',
    'A messaging app supporting private and group chats with typing indicators, read receipts, and media sharing.',
    '["Next.js", "TypeScript", "Socket.io", "PostgreSQL", "Tailwind CSS"]',
    'opensource',
    'https://github.com/akumu-maria/chat-app'
),
(
    'Portfolio Website',
    'This personal portfolio built with Next.js to showcase projects, skills, and contact information with a clean responsive design.',
    '["Next.js", "TypeScript", "Tailwind CSS"]',
    'school',
    'https://github.com/akumu-maria/portfolio'
),
(
    'Weather Dashboard',
    'A weather app that displays current conditions and a 7-day forecast for any city, using geolocation and animated weather icons.',
    '["React", "TypeScript", "OpenWeather API", "Tailwind CSS"]',
    'opensource',
    'https://github.com/akumu-maria/weather-dashboard'
);

COMMIT;

-- ============================================================
-- Already have data? Run this instead to add the type column
-- ============================================================

-- ALTER TABLE projects ADD COLUMN IF NOT EXISTS type VARCHAR(20) NOT NULL DEFAULT 'school';
-- UPDATE projects SET type = 'school'     WHERE id IN (2, 3, 6);
-- UPDATE projects SET type = 'opensource' WHERE id IN (1, 4, 5, 7);
