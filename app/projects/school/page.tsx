import { Suspense } from 'react';
import ProjectList from '@/components/ProjectList';
import ProjectFilter from '@/components/ProjectFilter';
import { getProjects } from '@/lib/projects-db';

export const metadata = {
  title: 'School Projects | Akumu Maria Paris',
  description: 'Browse my school projects',
};

export default async function SchoolProjectsPage() {
  const projects = await getProjects('school');

  return (
    <main className="container-main">
      <section className="section slide-up">
        <div className="mb-6">
          <h1 className="heading-1 mb-1">School Projects</h1>
          <p className="text-slate-500 text-sm">
            {projects.length} project{projects.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <Suspense fallback={<div className="h-10 mb-8" />}>
          <ProjectFilter />
        </Suspense>

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
