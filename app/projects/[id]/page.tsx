import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectById } from '@/lib/projects-db';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const numId = Number(id);
  if (Number.isNaN(numId)) return { title: 'Project Not Found' };
  const project = await getProjectById(numId);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} | Akumu Maria Paris`,
    description: project.description,
  };
}

const typeBadge: Record<string, { label: string; className: string }> = {
  school: { label: 'School', className: 'bg-violet-100 text-violet-700' },
  opensource: { label: 'Open Source', className: 'bg-emerald-100 text-emerald-700' },
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const numId = Number(id);

  // Non-numeric segments like "school" would hit this route — treat as 404
  if (Number.isNaN(numId)) notFound();

  const project = await getProjectById(numId);

  if (!project) notFound();

  const badge = typeBadge[project.type] ?? typeBadge.school;

  return (
    <main className="container-main">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 transition-colors mb-5"
      >
        ← Back to Projects
      </Link>

      <article className="section slide-up">
        {/* Title + badge */}
        <div className="flex flex-wrap items-start gap-3 mb-4">
          <h1 className="heading-1 flex-1 min-w-0 break-words">{project.title}</h1>
          <span className={`shrink-0 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full ${badge.className}`}>
            {badge.label}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-8">
          <h2 className="heading-3 mb-3">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs sm:text-sm rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Repository */}
        {project.link && (
          <div className="pt-6 border-t border-slate-200">
            <h2 className="heading-3 mb-3">Repository</h2>
            <p className="text-sm text-slate-600 break-all">{project.link}</p>
          </div>
        )}
      </article>
    </main>
  );
}
