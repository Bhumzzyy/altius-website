import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProgramsContent from '@/components/programs/ProgramsContent';

export const metadata: Metadata = {
  title: 'Programs & Pathways',
  description:
    'Explore the Altius FutureReady™ 8-year Grades 5–12 career readiness system, plus specialty programs in tutoring, languages, TCF/TEF, music, CNC, 3D printing, and skilled trades.',
};

export default async function ProgramsPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const params = await searchParams;
  return (
    <main className="min-h-screen flex flex-col justify-between bg-altiusLight text-altiusNavy">
      <div>
        <Navbar />
        <ProgramsContent key={params.tab ?? 'default'} initialTab={params.tab ?? ''} />
      </div>
      <Footer />
    </main>
  );
}