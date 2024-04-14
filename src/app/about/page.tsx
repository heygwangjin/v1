import Avatar from "@/components/Avatar";
import DownloadPdfButton from "@/components/DownloadPdfButton";
import Education from "@/components/Education";
import HorizontalDashedLine from "@/components/HorizontalDashedLine";
import MobileSocialLink from "@/components/MobileSocialLink";
import WorkExperience from "@/components/WorkExperience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "More about me and my work experience.",
};

export default function About() {
  return (
    <main className="flex w-full justify-center px-4 pb-28 pt-8 sm:px-8 sm:pt-16 lg:pb-16 lg:pt-36 xl:px-0">
      <div className="flex h-full w-full max-w-screen-sm flex-col items-center justify-start gap-8">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar
              src="/me.jpg"
              alt="gwangjin's profile picture"
              size={70}
              className="border border-dashed border-neutral-500 p-1"
            />
            <div>
              <h1 className="font-semibold">Gwangjin Kim</h1>
              <p className="text-sm text-neutral-500">Software Developer</p>
            </div>
          </div>
          <DownloadPdfButton href="/resume.pdf" label="Resume" />
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-2 break-words leading-7 text-neutral-700 dark:text-neutral-300">
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
        <HorizontalDashedLine className="hidden sm:block" />
        <MobileSocialLinks />
        <div className="flex w-full flex-col gap-4 text-neutral-700 dark:text-neutral-300">
          <WorkExperience />
        </div>
        <HorizontalDashedLine />
        <div className="flex w-full flex-col gap-4 text-neutral-700 dark:text-neutral-300">
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
      <div className="grid w-full grid-cols-2 sm:hidden">
        <MobileSocialLink type="github" />
        <MobileSocialLink type="x" />
      </div>
      <HorizontalDashedLine className="sm:hidden" />
    </>
  );
}
