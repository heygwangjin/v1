import Avatar from '@/components/Avatar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'More about me and my work experience.',
};

export default function About() {
  return (
    <main className="w-full flex justify-center pt-8 sm:pt-16 lg:pt-32 pb-28 lg:pb-16 px-4 sm:px-8 xl:px-0">
      <div className="max-w-screen-sm w-full h-full flex flex-col gap-8 justify-start items-center">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-4">
            <Avatar
              src="/me.jpg"
              alt="gwangjin's profile picture"
              size={80}
              className="p-1 border border-dashed border-neutral-500"
            />
            <div>
              <h1 className="text-lg font-semibold">Gwangjin Kim</h1>
              <p className="text-neutral-500">Software Developer</p>
            </div>
          </div>
          <button>Resume</button>
        </div>
      </div>
    </main>
  );
}
