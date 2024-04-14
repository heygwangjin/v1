import { cn } from "@/utils";

interface MailIconProps {
  className?: string;
}

function MailIcon({ className }: MailIconProps) {
  return (
    <svg
      width="24px"
      height="24px"
      // viewBox="-2.4 -2.4 28.80 28.80"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      id="mail"
      fill="#000000"
      transform="matrix(1, 0, 0, 1, 0, 0)"
      className={cn(
        "pointer-events-none size-4 text-neutral-600 transition-all duration-150 group-hover:text-neutral-950 dark:text-neutral-400 dark:group-hover:text-neutral-50",
        "drop-shadow-none group-hover:[filter:drop-shadow(0px_0px_4px_rgba(10,_10,_10,_.5))] dark:group-hover:[filter:drop-shadow(0px_0px_4px_rgba(250,250,250,1))]",
        "group-focus:[filter:drop-shadow(0px_0px_4px_rgba(10,_10,_10,_.5))] dark:group-focus:[filter:drop-shadow(0px_0px_4px_rgba(250,250,250,1))]",
        className,
      )}
    >
      <title>mail</title>
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M22,8.32V18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V8.69L4,9.78l7.52,4.1A1,1,0,0,0,12,14a1,1,0,0,0,.5-.14L20,9.49Z"></path>
        <path d="M22,6h0L20,7.18l-8,4.67L4,7.5,2,6.4V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6Z"></path>
      </g>
    </svg>
  );
}

export default MailIcon;
