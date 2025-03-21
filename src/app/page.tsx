import Avatar from '@/components/Avatar';
import DownloadIcon from '@/components/DownloadIcon';
import DownloadPdfButton from '@/components/DownloadPdfButton';
import Education from '@/components/Education';
import HorizontalDashedLine from '@/components/HorizontalDashedLine';
import MobileSocialLink from '@/components/MobileSocialLink';
import WorkExperience from '@/components/WorkExperience';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Cross2Icon } from '@radix-ui/react-icons';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start gap-6">
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
            <p className="text-sm text-muted-foreground">Suwon, South Korea</p>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button
              className={cn(
                `group h-11 rounded-full bg-foreground p-0.5 shadow-sm
                focus-visible:ring-1`,
              )}
              aria-label="Open a modal to select a resume"
            >
              <div
                className={cn(
                  `z-20 flex h-full w-full items-center justify-center gap-1
                  rounded-full px-4`,
                  `text-background transition-colors duration-150
                  group-hover:scale-105`,
                  'transition-colors duration-150',
                )}
              >
                <span
                  className={cn(
                    'z-30 text-sm',
                    `[text-shadow:_0_0_1.25rem_rgba(250,250,250,0)]
                    dark:[text-shadow:0_0_0.75rem_rgba(10,10,10,0)]`,
                    `group-hover:[text-shadow:_0_0_1.25rem_rgba(250,250,250,1)]
                    dark:group-hover:[text-shadow:0_0_0.75rem_rgba(10,10,10,1)]`,
                    `group-focus:[text-shadow:_0_0_1.25rem_rgba(250,250,250,1)]
                    dark:group-focus:[text-shadow:0_0_0.75rem_rgba(10,10,10,1)]`,
                    'transition-[text-shadow] duration-300',
                  )}
                >
                  Resume
                </span>
                <DownloadIcon />
              </div>
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-4 text-center">
                Select a resume language to download
              </DialogTitle>
              <DialogDescription className="flex justify-center gap-4">
                <DownloadPdfButton href="/resume-ko.pdf" label="Resume-ko" />
                <DownloadPdfButton href="/resume-en.pdf" label="Resume-en" />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div
        className="flex w-full flex-col items-center justify-between gap-2
          break-words leading-7 text-foreground"
      >
        <p className="w-full">
          I am a software developer passionate about web development and design.
          I worked at a startup agency where I developed web applications from
          scratch, handling both design and client communication.
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
