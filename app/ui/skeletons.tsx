// Reusable skeleton building blocks

/** Single project card placeholder */
export function ProjectCardSkeleton() {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 space-y-4">
      {/* title + badge row */}
      <div className="flex items-start justify-between gap-3">
        <div className="h-5 w-3/4 rounded bg-slate-200" />
        <div className="h-5 w-16 rounded-full bg-slate-200" />
      </div>
      {/* description lines */}
      <div className="space-y-2">
        <div className="h-3 w-full rounded bg-slate-200" />
        <div className="h-3 w-5/6 rounded bg-slate-200" />
      </div>
      {/* tech tags */}
      <div className="flex flex-wrap gap-2">
        {[60, 80, 56, 72].map((w) => (
          <div key={w} className="h-5 rounded-md bg-slate-200" style={{ width: w }} />
        ))}
      </div>
      {/* action row */}
      <div className="pt-3 border-t border-slate-100">
        <div className="h-4 w-24 rounded bg-slate-200" />
      </div>
    </div>
  );
}

/** 2-column grid of card skeletons */
export function ProjectListSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}

/** Full-page skeleton for the opensource projects page */
export function OpenSourcePageSkeleton() {
  return (
    <main className="container-main animate-pulse">
      <section className="section">
        {/* heading + count */}
        <div className="mb-6 space-y-2">
          <div className="h-8 w-56 rounded bg-slate-200" />
          <div className="h-4 w-24 rounded bg-slate-200" />
        </div>

        {/* filter chips */}
        <div className="flex gap-2 mb-8">
          {[88, 72, 104].map((w) => (
            <div key={w} className="h-9 rounded-full bg-slate-200" style={{ width: w }} />
          ))}
        </div>

        {/* project cards */}
        <ProjectListSkeleton count={4} />
      </section>
    </main>
  );
}
