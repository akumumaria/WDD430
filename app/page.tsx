import Link from 'next/link';
import Image from 'next/image';
import ProjectList from '@/components/ProjectList';
import { getProjects } from '@/lib/projects-db';

export default async function Home() {
  const allProjects = await getProjects();
  const featured = allProjects.slice(0, 3);

  return (
    <main className="container-main">
      {/* Hero */}
      <section className="section slide-up">
        <div className="flex flex-col-reverse sm:flex-row items-center gap-8">
          {/* Text */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="heading-1 mb-3">Hi, I&apos;m Akumu Maria Paris</h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              Software Developer with a passion for building clean, efficient web applications.
              I specialize in modern JavaScript frameworks and love turning complex problems into
              simple, beautiful solutions.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <Link href="/about" className="btn-primary">Learn More</Link>
              <Link href="/projects" className="btn-outline">View Projects</Link>
            </div>
          </div>

          {/* Photo */}
          <div className="shrink-0">
            <Image
              src="/amah.jpeg"
              alt="Akumu Maria Paris"
              width={220}
              height={220}
              className="rounded-2xl object-cover shadow-lg border-4 border-white w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section slide-up">
        <div className="flex-between mb-5">
          <h2 className="heading-2">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap"
          >
            View all →
          </Link>
        </div>
        <ProjectList projects={featured} />
      </section>
    </main>
  );
}
