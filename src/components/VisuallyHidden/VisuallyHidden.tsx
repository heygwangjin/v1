// josh w comeau's VisuallyHidden component

// These styles will make sure the component
// is not visible, but will still be announced
// by screen readers.
//
// Adding “display: none” would hide the
// element from ALL users, including those
// using screen-readers.
import { cn } from '@/utils';

interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

function VisuallyHidden({
  as: Element = 'span',
  className,
  children,
  ...props
}: VisuallyHiddenProps) {
  return (
    <Element className={cn('sr-only', className)} {...props}>
      {children}
    </Element>
  );
}

export default VisuallyHidden;
