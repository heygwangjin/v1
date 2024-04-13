import Avatar from '@/components/Avatar';
import DownloadPdfButton from '@/components/DownloadPdfButton';
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
      </div>
    </main>
  );
}
