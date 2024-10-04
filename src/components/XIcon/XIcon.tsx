import { cn } from '@/lib/utils';

interface XIconProps {
  className?: string;
}

function XIcon({ className }: XIconProps) {
  return (
    <svg
      className={cn(
        'pointer-events-none size-4 text-neutral-600 transition-all duration-150 group-hover:text-neutral-950 dark:text-neutral-400 dark:group-hover:text-neutral-50',
        'drop-shadow-none group-hover:[filter:drop-shadow(0px_0px_4px_rgba(10,_10,_10,_.5))] dark:group-hover:[filter:drop-shadow(0px_0px_4px_rgba(250,250,250,1))]',
        'group-focus:[filter:drop-shadow(0px_0px_4px_rgba(10,_10,_10,_.5))] dark:group-focus:[filter:drop-shadow(0px_0px_4px_rgba(250,250,250,1))]',
        className,
      )}
      fill="currentColor"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <title>X</title>
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    </svg>
  );
}

export default XIcon;
