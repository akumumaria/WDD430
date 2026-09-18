import ProjectList from '@/components/ProjectList';
import { getProjects } from '@/lib/projects-db';

// Async Server Component — fetches its own data so it can be
// streamed independently inside a <Suspense> boundary.
export default async function SchoolProjectList() {
  const projects = await getProjects('school');

  if (projects.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400">
        <p className="text-4xl mb-3">📂</p>
        <p className="text-base font-medium">No projects found</p>
        <p className="text-sm mt-1">Try a different filter</p>
      </div>
    );
  }

  return (
    <>
      <p className="text-slate-500 text-sm mb-6">
        {projects.length} project{projects.length !== 1 ? 's' : ''} found
      </p>
      <ProjectList projects={projects} />
    </>
  );
}
