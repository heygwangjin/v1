import DownloadIcon from '@/components/DownloadIcon';
import { cn } from '@/lib/utils';

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
        `group h-11 rounded-full bg-foreground p-0.5 shadow-sm
        focus-visible:ring-1`,
        className,
      )}
      aria-label="Download Resume"
      {...props}
    >
      {/* TODO: 그림자 이펙트 컴포넌트화 */}
      <div
        className={cn(
          `z-20 flex h-full w-full items-center justify-center gap-1
          rounded-full px-4`,
          'text-background transition-colors duration-150 group-hover:scale-105',
          'transition-colors duration-150 group-focus:text-foreground',
        )}
      >
        <span
          className={cn(
            'z-30 text-sm',
            `[text-shadow:_0_0_1.25rem_rgba(250,250,250,0)]
            dark:[text-shadow:0_0_0.75rem_rgba(10,10,10,0)]`,
            `group-hover:[text-shadow:_0_0_1.25rem_rgba(250,250,250,1)]
            dark:group-hover:[text-shadow:0_0_0.75rem_rgba(10,10,10,1)]`,
            `group-focus:[text-shadow:_0_0_1.25rem_rgba(250,250,250,1)]
            dark:group-focus:[text-shadow:0_0_0.75rem_rgba(10,10,10,1)]`,
            'transition-[text-shadow] duration-300',
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
