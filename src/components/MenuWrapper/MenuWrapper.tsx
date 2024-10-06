import { cn } from '@/lib/utils';

interface MenuWrapperProps {
  children: React.ReactNode;
  showOnMobile?: boolean;
}

function MenuWrapper({ children, showOnMobile = true }: MenuWrapperProps) {
  return (
    <div
      className={cn(
        `relative z-0 shrink-0 overflow-hidden rounded-full bg-neutral-200 p-px
        shadow-sm shadow-neutral-400 dark:border dark:border-neutral-600
        dark:bg-neutral-800 dark:shadow-black`,
        showOnMobile ? 'block' : 'hidden sm:block',
      )}
    >
      <div
        className="relative flex items-center justify-between gap-4 rounded-full
          bg-neutral-50 px-1 dark:bg-neutral-925"
      >
        {children}
      </div>
    </div>
  );
}

export default MenuWrapper;
