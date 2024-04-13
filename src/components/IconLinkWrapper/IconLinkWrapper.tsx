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
      className="p-px relative rounded-full shadow-sm shadow-neutral-400 dark:shadow-black overflow-hidden group outline-none focus-visible:ring-1 ring-neutral-500 dark:ring-neutral-50"
      aria-label={label}
    >
      <div className="bg-gradient-to-tl from-neutral-50 dark:from-neutral-925 via-neutral-200 dark:via-neutral-800 to-neutral-50 dark:to-neutral-925 p-2 rounded-full z-20 relative">
        {children}
      </div>
    </Link>
  );
}

export default IconLinkWrapper;
