import { OpenSourcePageSkeleton } from '@/app/ui/skeletons';

// Full-page streaming skeleton — scoped to /projects/opensource only
// via the (opensource) route group so it won't affect other pages.
export default function Loading() {
  return <OpenSourcePageSkeleton />;
}
