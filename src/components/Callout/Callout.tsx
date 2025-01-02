/** Originally from `nextra-theme-docs`
 * @link https://github.com/shuding/nextra/blob/main/packages/nextra-theme-docs/src/components/callout.tsx
 */

import React, { type ReactElement, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

const calloutTypes = {
  default: 'default',
  error: 'error',
  info: 'info',
  warn: 'warn',
};

type CalloutType = keyof typeof calloutTypes;

const classes: Record<CalloutType, string> = {
  default: 'border-l-blue-600',
  info: 'border-l-green-600',
  warn: 'border-l-yellow-400',
  error: 'border-l-red-600',
};

interface CalloutProps {
  type?: CalloutType;
  children: ReactNode;
}

function Callout({ children, type = 'default' }: CalloutProps): ReactElement {
  return (
    <div
      className={cn(
        'mt-8 flex h-fit min-h-12 items-center break-keep border-l-4 pl-2',
        classes[type],
      )}
    >
      {children}
    </div>
  );
}

export default Callout;
