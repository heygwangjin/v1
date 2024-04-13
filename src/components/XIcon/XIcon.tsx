import { cn } from '@/utils';

interface XIconProps {
  className?: string;
}

function XIcon({ className }: XIconProps) {
  return (
    <svg
      className={cn(
        'size-4 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-neutral-50 transition-all duration-150 pointer-events-none',
        'drop-shadow-none group-hover:[filter:drop-shadow(0px_0px_4px_rgba(10,_10,_10,_.5))] dark:group-hover:[filter:drop-shadow(0px_0px_4px_rgba(250,250,250,1))]',
        'group-focus:[filter:drop-shadow(0px_0px_4px_rgba(10,_10,_10,_.5))] dark:group-focus:[filter:drop-shadow(0px_0px_4px_rgba(250,250,250,1))]',
        className
      )}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>X</title>
      <g fill="currentColor">
        <path d="M1 2h2.5L3.5 2h-2.5z">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M1 2h2.5L3.5 2h-2.5z;M1 2h2.5L18.5 22h-2.5z"
          />
        </path>
        <path d="M5.5 2h2.5L7.2 2h-2.5z">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M5.5 2h2.5L7.2 2h-2.5z;M5.5 2h2.5L23 22h-2.5z"
          />
        </path>
        <path d="M3 2h5v0h-5z" opacity="0">
          <set attributeName="opacity" begin="0.4s" to="1" />
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.4s"
            dur="0.4s"
            values="M3 2h5v0h-5z;M3 2h5v2h-5z"
          />
        </path>
        <path d="M16 22h5v0h-5z" opacity="0">
          <set attributeName="opacity" begin="0.4s" to="1" />
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.4s"
            dur="0.4s"
            values="M16 22h5v0h-5z;M16 22h5v-2h-5z"
          />
        </path>
        <path d="M18.5 2h3.5L22 2h-3.5z" opacity="0">
          <set attributeName="opacity" begin="0.5s" to="1" />
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.5s"
            dur="0.4s"
            values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"
          />
        </path>
      </g>
    </svg>
  );
}

export default XIcon;
