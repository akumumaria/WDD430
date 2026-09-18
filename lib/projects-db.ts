import { sql } from '@vercel/postgres';

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

export async function getProjects(type?: string | null): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
    return rows;
  }
  const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
  return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id}
  `;
  return rows[0] ?? null;
}

// ── Search + Pagination ──────────────────────────────────────────

const ITEMS_PER_PAGE = 6;

/**
 * Returns a page of projects filtered by query string.
 * Searches title, description, and technologies (JSONB).
 * query is injected via parameterized sql`` — safe from SQL injection.
 */
export async function fetchFilteredProjects(
  query: string,
  currentPage: number
): Promise<Project[]> {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const search = `%${query}%`;

  const { rows } = await sql<Project>`
    SELECT * FROM projects
    WHERE
      title       ILIKE ${search}
      OR description ILIKE ${search}
      OR technologies::text ILIKE ${search}
    ORDER BY id
    LIMIT  ${ITEMS_PER_PAGE}
    OFFSET ${offset}
  `;
  return rows;
}

/**
 * Returns the total number of pages for a given query.
 */
export async function fetchProjectsPages(query: string): Promise<number> {
  const search = `%${query}%`;

  const { rows } = await sql<{ count: string }>`
    SELECT COUNT(*) AS count FROM projects
    WHERE
      title       ILIKE ${search}
      OR description ILIKE ${search}
      OR technologies::text ILIKE ${search}
  `;

  const total = Number(rows[0].count);
  return Math.ceil(total / ITEMS_PER_PAGE);
}
