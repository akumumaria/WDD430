import { Suspense } from 'react';
import ProjectFilter from '@/components/ProjectFilter';
import SchoolProjectList from '@/app/ui/SchoolProjectList';
import { ProjectListSkeleton } from '@/app/ui/skeletons';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'School Projects | Akumu Maria Paris',
  description: 'Browse my school projects',
};

export default function SchoolProjectsPage() {
  // Note: this page component itself is NOT async —
  // data fetching happens inside SchoolProjectList.
  // The page shell renders immediately; the list streams in.
  return (
    <main className="container-main">
      <section className="section slide-up">
        {/* Shell renders instantly */}
        <div className="mb-6">
          <h1 className="heading-1 mb-1">School Projects</h1>
        </div>

        <ProjectFilter />

        {/* List streams in independently — skeleton shows while data loads */}
        <Suspense fallback={<ProjectListSkeleton count={3} />}>
          <SchoolProjectList />
        </Suspense>
      </section>
    </main>
  );
}
