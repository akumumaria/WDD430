import Image from 'next/image';
import SkillCard from '@/components/SkillCard';

export default function About() {
  return (
    <main className="container-main">
      <section className="section slide-up">

        {/* Intro — stacks on mobile, side-by-side on md+ */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mb-8">
          <div className="shrink-0">
            <Image
              src="/amah1.jpeg"
              alt="Akumu Maria Paris"
              width={200}
              height={200}
              className="rounded-2xl object-cover shadow-lg border-4 border-white w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56"
              priority
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="heading-1 mb-3">About Me</h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              I&apos;m Akumu Maria Paris, a software developer with a bachelor&apos;s degree in software
              development. I focus on building practical, user-centered applications and enjoy
              working with modern web technologies to solve real-world problems.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="section bg-slate-50 border-slate-200 mb-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="flex-1 w-full">
              <h2 className="heading-2 mb-4">Education</h2>
              <div className="card bg-white">
                <h3 className="heading-3 mb-2">Bachelor&apos;s Degree in Software Development</h3>
                <p className="text-muted text-sm sm:text-base">
                  Focus on full-stack development, software engineering principles, and building
                  scalable applications.
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <Image
                src="/amah2.jpeg"
                alt="Akumu Maria Paris studying"
                width={180}
                height={180}
                className="rounded-2xl object-cover shadow-md border-4 border-white w-32 h-32 sm:w-44 sm:h-44"
              />
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="heading-2 mb-5">Technical Skills</h2>
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
