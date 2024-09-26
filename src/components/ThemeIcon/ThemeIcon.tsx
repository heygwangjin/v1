import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ThemeIconProps {
  theme: "light" | "dark";
}

function ThemeIcon({ theme }: ThemeIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="currentColor"
      className={cn(
        "m-px h-6 w-6 text-neutral-600 transition-all duration-150 group-hover:text-neutral-950 group-active:scale-75 dark:text-neutral-400 dark:group-hover:text-neutral-50",
        "drop-shadow-none group-hover:[filter:drop-shadow(0px_0px_4px_rgba(10,_10,_10,_.5))] dark:group-hover:[filter:drop-shadow(0px_0px_4px_rgba(250,250,250,1))]",
        "group-focus:[filter:drop-shadow(0px_0px_4px_rgba(10,_10,_10,_.5))] dark:group-focus:[filter:drop-shadow(0px_0px_4px_rgba(250,250,250,1))]",
      )}
      style={{
        transform: "translateZ(0)",
      }}
    >
      <defs>
        <mask id="moon-mask">
          <rect width="100%" height="100%" fill="white" />
          <motion.circle
            fill="black"
            initial={false}
            animate={{
              cx: theme === "dark" ? 75 : 80,
              cy: theme === "dark" ? 30 : 20,
              r: theme === "dark" ? 35 : 0,
            }}
            transition={{
              duration: 0.5,
            }}
          />
        </mask>
      </defs>
      <motion.circle
        fill="currentColor"
        mask="url(#moon-mask)"
        initial={false}
        animate={{
          cx: theme === "dark" ? 52.5 : 50,
          cy: theme === "dark" ? 47.5 : 50,
          r: theme === "dark" ? 35 : 25,
        }}
      />
      <g>
        {[...Array(6)].map((_, index) => {
          const rayRadius = 6;
          return (
            <motion.circle
              key={`ray-${index}`}
              cy="50"
              fill="currentColor"
              transform={`rotate(${index * 60 + 30} 50 50)`}
              initial={false}
              animate={{
                cx: theme === "light" ? rayRadius * 2 : -rayRadius,
                r: theme === "light" ? rayRadius : 0,
                fillOpacity: theme === "light" ? 1 : 0,
                rotate: index * 60 + 30,
              }}
              transition={{
                delay: 0.025 * index,
              }}
              style={{
                originX: "50%",
                originY: "50%",
              }}
            />
          );
        })}
      </g>
    </svg>
  );
}

export default ThemeIcon;
