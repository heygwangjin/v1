import Avatar from '@/components/Avatar';
import DownloadPdfButton from '@/components/DownloadPdfButton';
import Education from '@/components/Education';
import HorizontalDashedLine from '@/components/HorizontalDashedLine';
import WorkExperience from '@/components/WorkExperience';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'More about me and my work experience.',
};

export default function About() {
  return (
    <main className="w-full flex justify-center pt-8 sm:pt-16 lg:pt-36 pb-28 lg:pb-16 px-4 sm:px-8 xl:px-0">
      <div className="max-w-screen-sm w-full h-full flex flex-col gap-8 justify-start items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4 items-center">
            <Avatar
              src="/me.jpg"
              alt="gwangjin's profile picture"
              size={70}
              className="p-1 border border-dashed border-neutral-500"
            />
            <div>
              <h1 className="font-semibold">Gwangjin Kim</h1>
              <p className="text-sm text-neutral-500">Software Developer</p>
            </div>
          </div>
          <DownloadPdfButton href="/resume.pdf" label="Resume" />
        </div>
        <div className="w-full flex flex-col justify-between items-center gap-2 text-neutral-700 dark:text-neutral-300 leading-7 break-words">
          <p className="w-full">
            I am a software developer based in South Korea. I have experience in
            web development, especially in hybrid applications. I am currently
            working as a full-stack developer at a startup, where I use
            SvelteKit, Supabase and TailwindCSS.
          </p>
          <p className="w-full">
            Recently, I have been learning React, TypeScript, and Next.js to
            further expand my knowledge and experience in frontend web
            development.
          </p>
        </div>
        <HorizontalDashedLine />
        <div className="w-full flex flex-col gap-4 text-neutral-700 dark:text-neutral-300">
          <WorkExperience />
        </div>
        <HorizontalDashedLine />
        <div className="w-full flex flex-col gap-4 text-neutral-700 dark:text-neutral-300">
          <Education />
        </div>
      </div>
    </main>
  );
}
