import Avatar from '@/components/Avatar';
import DownloadPdfButton from '@/components/DownloadPdfButton';
import Education from '@/components/Education';
import HorizontalDashedLine from '@/components/HorizontalDashedLine';
import MobileSocialLink from '@/components/MobileSocialLink';
import WorkExperience from '@/components/WorkExperience';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'More about me and my work experience.',
};

export default function About() {
  return (
    <main
      className="flex w-full justify-center px-4 pb-28 pt-8 sm:px-8 sm:pt-16
        lg:pb-16 lg:pt-36 xl:px-0"
    >
      <div
        className="flex h-full w-full max-w-screen-sm flex-col items-center
          justify-start gap-6"
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24 sm:h-28 sm:w-28">
              <Avatar
                src="/images/me.jpg"
                alt="gwangjin's profile picture"
                className="border border-dashed border-foreground/70 p-1"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">Gwangjin Kim</h1>
              <p>Frontend Developer</p>
              <p className="text-sm text-muted-foreground">
                Suwon, South Korea
              </p>
            </div>
          </div>
          <DownloadPdfButton href="/resume-ko.pdf" label="Resume" />
        </div>
        <div
          className="flex w-full flex-col items-center justify-between gap-2
            break-words leading-7 text-foreground"
        >
          <p className="w-full">
            I am a software developer passionate about web development and
            design. I worked at a startup agency where I developed web
            applications from scratch, handling both design and client
            communication.
          </p>
          <p className="w-full">
            When I&apos;m not in front of my laptop, I&apos;m most likely
            swimming, reading, or walking my dog.
          </p>
          <p className="w-full">
            I&apos;m open to working in Malaysia 🇲🇾 or Singapore 🇸🇬, so please
            feel free to contact me if you have any opportunities.
          </p>
        </div>
        <HorizontalDashedLine className="hidden sm:block" />
        <MobileSocialLinks />
        <div className="flex w-full flex-col gap-4 text-foreground">
          <WorkExperience />
        </div>
        <HorizontalDashedLine />
        <div className="flex w-full flex-col gap-4 text-foreground">
          <Education />
        </div>
        <HorizontalDashedLine className="sm:hidden" />
      </div>
    </main>
  );
}

function MobileSocialLinks() {
  return (
    <>
      <HorizontalDashedLine className="sm:hidden" />
      <div className="grid w-full grid-cols-4 sm:hidden">
        <MobileSocialLink type="github" />
        <MobileSocialLink type="x" />
        <MobileSocialLink type="bsky" />
        <MobileSocialLink type="mail" />
      </div>
      <HorizontalDashedLine className="sm:hidden" />
    </>
  );
}
