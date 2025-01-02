import { cn } from '@/lib/utils';

interface HorizontalDashedLineProps {
  className?: string;
}

function HorizontalDashedLine({ className }: HorizontalDashedLineProps) {
  return (
    <div
      className={cn(
        'w-full border border-dashed border-muted-foreground',
        className,
      )}
    />
  );
}

export default HorizontalDashedLine;
