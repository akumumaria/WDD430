interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}
        
export default function ProjectCard({title, description, technologies, link}: ProjectCardProps) {
  return (
    <article className="card hover-lift">
      <h3 className="card-header">{title}</h3>
      <p className="text-slate-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Technologies</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
      {link && (
        <div className="mt-4 pt-4 border-t border-slate-200">
          <button className="project-link">
            View Project →
          </button>
        </div>
      )}
    </article>
  );
}
