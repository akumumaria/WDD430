import SkillCard from '@/components/SkillCard';

export default function About() {
  return (
    <main className="container-main">
      <section className="section slide-up">
        <h1 className="heading-1 mb-6">About Me</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          I'm Akumu Maria Paris, a software developer with a bachelor's degree in software development. 
          I focus on building practical, user-centered applications and enjoy working with modern web technologies 
          to solve real-world problems.
        </p>
        
        <div className="section bg-slate-50 border-slate-200">
          <h2 className="heading-2 mb-4">Education</h2>
          <div className="card bg-white">
            <h3 className="heading-3 mb-2">Bachelor's Degree in Software Development</h3>
            <p className="text-muted">
              Focus on full-stack development, software engineering principles, and building scalable applications.
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="heading-2 mb-6">Technical Skills</h2>
          <div className="grid-3">
            <SkillCard skillName="Next.js" proficiency="Advanced" icon="⚛️" />
            <SkillCard skillName="React" proficiency="Advanced" icon="⚛️" />
            <SkillCard skillName="TypeScript" proficiency="Advanced" icon="📘" />
            <SkillCard skillName="Tailwind CSS" proficiency="Advanced" icon="🎨" />
            <SkillCard skillName="Node.js" proficiency="Intermediate" icon="🟢" />
            <SkillCard skillName="MongoDB" proficiency="Intermediate" icon="🍃" />
          </div>
        </div>
      </section>
    </main>
  );
}
