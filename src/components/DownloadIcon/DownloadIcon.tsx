import { cn } from '@/lib/utils';

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className={cn(
        'size-3 transition-[filter] duration-150',
        `drop-shadow-none
        group-hover:[filter:drop-shadow(0px_0px_4px_rgba(250,250,250,1))]
        dark:group-hover:[filter:drop-shadow(0px_0px_4px_rgba(10,_10,_10,_.5))]`,
      )}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}

export default DownloadIcon;
