import Link from "next/link";

import GithubIcon from "@/components/GithubIcon";
import XIcon from "@/components/XIcon";

interface MobileSocialLinkProps {
  type: "github" | "x";
}

type socialLinksType = {
  [key: string]: {
    href: string;
    label: string;
  };
};

function MobileSocialLink({ type }: MobileSocialLinkProps) {
  let href = "";
  let label = "";

  const socialLinks: socialLinksType = {
    github: {
      href: "https://github.com/heygwangjin",
      label: "GitHub",
    },
    x: {
      href: "https://www.twitter.com/heygwangjin",
      label: "X",
    },
  };

  if (type in socialLinks) {
    href = socialLinks[type].href;
    label = socialLinks[type].label;
  }

  return (
    <Link
      href={href}
      target="_blank"
      className="flex h-full w-full items-center justify-center text-neutral-700 dark:text-neutral-200"
      aria-label={label}
    >
      {type === "github" && <GithubIcon className="size-8" />}
      {type === "x" && <XIcon className="size-8" />}
    </Link>
  );
}

export default MobileSocialLink;
