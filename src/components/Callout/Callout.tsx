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
  default: 'bg-blue-600',
  info: 'bg-green-600',
  warn: 'bg-yellow-400',
  error: 'bg-red-600',
};

interface CalloutProps {
  type?: CalloutType;
  children: ReactNode;
}

function Callout({ children, type = 'default' }: CalloutProps): ReactElement {
  return (
    <div className="mt-8 flex h-fit min-h-12">
      <div className={cn('mr-2 w-2 sm:w-1', classes[type])}></div>
      <div className="flex items-center break-keep">{children}</div>
    </div>
  );
}

export default Callout;
