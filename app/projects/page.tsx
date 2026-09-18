import { Suspense } from 'react';
import ProjectList from '@/components/ProjectList';
import ProjectFilter from '@/components/ProjectFilter';
import { getProjects } from '@/lib/projects-db';

interface PageProps {
  searchParams: Promise<{ type?: string }>;
}

export const metadata = {
  title: 'Projects | Akumu Maria Paris',
  description: 'Browse my school and open-source projects',
};

export default async function ProjectsPage({ searchParams }: PageProps) {
  const { type } = await searchParams;
  const projects = await getProjects(type ?? null);

  const heading =
    type === 'school' ? 'School Projects' :
      type === 'opensource' ? 'Open Source Projects' :
        'All Projects';

  return (
    <main className="container-main">
      <section className="section slide-up">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="heading-1 mb-1">{heading}</h1>
          <p className="text-slate-500 text-sm">
            {projects.length} project{projects.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Filter chips */}
        <Suspense fallback={<div className="h-10 mb-8" />}>
          <ProjectFilter />
        </Suspense>

        {/* Grid or empty state */}
        {projects.length > 0 ? (
          <ProjectList projects={projects} />
        ) : (
          <div className="text-center py-12 text-slate-400">
            <p className="text-4xl mb-3">📂</p>
            <p className="text-base font-medium">No projects found</p>
            <p className="text-sm mt-1">Try a different filter</p>
          </div>
        )}
      </section>
    </main>
  );
}
