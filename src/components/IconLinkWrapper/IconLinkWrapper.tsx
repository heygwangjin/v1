import Link from 'next/link';

interface IconLinkWrapperProps {
  children: React.ReactNode;
  href: string;
  label: string;
}

function IconLinkWrapper({ children, href, label }: IconLinkWrapperProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group relative overflow-hidden rounded-full p-px shadow-sm shadow-neutral-400 outline-none ring-neutral-500 focus-visible:ring-1 dark:shadow-black dark:ring-neutral-50"
      aria-label={label}
    >
      <div className="relative z-20 rounded-full bg-gradient-to-tl from-neutral-50 via-neutral-200 to-neutral-50 p-2 dark:from-neutral-925 dark:via-neutral-800 dark:to-neutral-925">
        {children}
      </div>
    </Link>
  );
}

export default IconLinkWrapper;
