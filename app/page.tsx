import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'Full-Stack E-Commerce Platform',
    description: 'A comprehensive e-commerce solution with user authentication, product management, and payment integration.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com/akumu-maria/e-commerce-platform'
  },
  {
    title: 'Task Management Application',
    description: 'A collaborative task management tool with real-time updates and team collaboration features.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    link: 'https://github.com/akumu-maria/task-manager'
  }
];

export default function Home() { 
  return (
    <main className="container-main">
      <section className="section slide-up">
        <div className="max-w-2xl">
          <h1 className="heading-1 mb-4">Hi, I'm Akumu Maria Paris</h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Software Developer with a passion for building clean, efficient web applications. 
            I specialize in modern JavaScript frameworks and love turning complex problems into simple, beautiful solutions.
          </p>
          <div className="flex gap-4">
            <a href="/about" className="btn-primary">Learn More</a>
            <button className="btn-outline">GitHub</button>
          </div>
        </div>
      </section>
      
      <section className="section slide-up">
        <h2 className="heading-2 mb-6">Featured Projects</h2>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
