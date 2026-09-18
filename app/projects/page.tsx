import { Suspense } from 'react';
import ProjectList from '@/components/ProjectList';
import ProjectFilter from '@/components/ProjectFilter';
import ProjectSearch from '@/components/ProjectSearch';
import Pagination from '@/components/Pagination';
import { fetchFilteredProjects, fetchProjectsPages } from '@/lib/projects-db';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Projects | Akumu Maria Paris',
  description: 'Browse my school and open-source projects',
};

interface PageProps {
  searchParams?: Promise<{ query?: string; page?: string }>;
}

export default async function ProjectsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const query = params?.query ?? '';
  const currentPage = Number(params?.page) || 1;

  // Both run in parallel
  const [projects, totalPages] = await Promise.all([
    fetchFilteredProjects(query, currentPage),
    fetchProjectsPages(query),
  ]);

  return (
    <main className="container-main">
      <section className="section slide-up">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="heading-1 mb-1">All Projects</h1>
          <p className="text-slate-500 text-sm">
            {projects.length === 0
              ? 'No projects found'
              : `Page ${currentPage} of ${totalPages}`}
          </p>
        </div>

        {/* Search input */}
        <Suspense fallback={<div className="h-12 mb-6 rounded-lg bg-slate-100 animate-pulse" />}>
          <ProjectSearch />
        </Suspense>

        {/* Filter chips */}
        <Suspense fallback={<div className="h-10 mb-8" />}>
          <ProjectFilter />
        </Suspense>

        {/* Results */}
        {projects.length > 0 ? (
          <>
            <ProjectList projects={projects} />

            {/* Pagination */}
            <Suspense fallback={null}>
              <Pagination totalPages={totalPages} />
            </Suspense>
          </>
        ) : (
          <div className="text-center py-12 text-slate-400">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-base font-medium">No projects match your search</p>
            <p className="text-sm mt-1">Try different keywords</p>
          </div>
        )}
      </section>
    </main>
  );
}
