import { PageTransition } from '../PageTransition';

export default function PageTransitionExample() {
  return (
    <PageTransition>
      <div className="p-8">
        <h1 className="text-2xl font-mono">Page Content</h1>
      </div>
    </PageTransition>
  );
}
