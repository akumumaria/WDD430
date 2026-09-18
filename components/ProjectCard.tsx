import Link from 'next/link';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  type: 'opensource' | 'school';
  link?: string;
}

const typeBadge: Record<string, { label: string; className: string }> = {
  school: { label: 'School', className: 'bg-violet-100 text-violet-700' },
  opensource: { label: 'Open Source', className: 'bg-emerald-100 text-emerald-700' },
};

export default function ProjectCard({
  id,
  title,
  description,
  technologies,
  type,
  link,
}: ProjectCardProps) {
  const badge = typeBadge[type] ?? typeBadge.school;

  return (
    <article className="card hover-lift flex flex-col h-full">
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="card-header mb-0 leading-snug">{title}</h3>
        <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${badge.className}`}>
          {badge.label}
        </span>
      </div>

      <p className="text-slate-600 mb-4 leading-relaxed text-sm flex-1">{description}</p>

      {/* Tech tags */}
      <div className="mb-5">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
          Technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-auto pt-4 border-t border-slate-200 space-y-2">
        <Link href={`/projects/${id}`} className="project-link font-semibold block">
          View Details →
        </Link>
        {link && (
          <p className="text-xs text-slate-400 break-all">{link}</p>
        )}
      </div>
    </article>
  );
}
