import React from 'react';
import DownloadIcon from '@/components/DownloadIcon';
import { cn } from '@/utils';

interface DownloadPdfButtonProps {
  href: string;
  className?: string;
  label: string;
}

function DownloadPdfButton({
  href,
  className,
  label,
  ...props
}: DownloadPdfButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      className={cn(
        'bg-neutral-200 dark:bg-neutral-800 p-0.5 rounded-full shadow-md shadow-neutral-400 dark:shadow-black group outline-none focus-visible:ring-1 ring-neutral-950 dark:ring-neutral-50 h-11',
        className
      )}
      aria-label="Download Resume"
      {...props}
    >
      {/* TODO: 그림자 이펙트 컴포넌트화 */}
      <div
        className={cn(
          'w-full h-full flex justify-center items-center gap-1 px-4 rounded-full z-20',
          'bg-gradient-to-tl from-neutral-50 dark:from-neutral-925 via-neutral-200 dark:via-neutral-900 to-neutral-50 dark:to-neutral-925',
          'text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-neutral-50 transition-colors duration-150',
          'group-focus:text-neutral-950 dark:group-focus:text-neutral-50 transition-colors duration-150'
        )}
      >
        <span
          className={cn(
            'text-sm sm:text-sm z-30',
            '[text-shadow:_0_0_1.25rem_rgba(10,10,10,0)] dark:[text-shadow:0_0_0.75rem_rgba(250,250,250,0)]',
            'group-hover:[text-shadow:_0_0_1.25rem_rgba(10,10,10,1)] dark:group-hover:[text-shadow:0_0_0.75rem_rgba(250,250,250,1)]',
            'group-focus:[text-shadow:_0_0_1.25rem_rgba(10,10,10,1)] dark:group-focus:[text-shadow:0_0_0.75rem_rgba(250,250,250,1)]',
            'transition-[text-shadow] duration-300'
          )}
        >
          {label}
        </span>
        <DownloadIcon />
      </div>
    </a>
  );
}

export default DownloadPdfButton;
