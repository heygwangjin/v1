import { cn } from "@/utils";

interface HorizontalDashedLineProps {
  className?: string;
}

function HorizontalDashedLine({ className }: HorizontalDashedLineProps) {
  return (
    <div
      className={cn(
        "w-full border border-dashed border-neutral-400 dark:border-neutral-700",
        className,
      )}
    />
  );
}

export default HorizontalDashedLine;
