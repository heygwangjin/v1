'use client';

import React from 'react';
import { cn } from '@/lib/utils';

function Code({ children }: { children: any }) {
  const [copied, setCopied] = React.useState(false);
  const codeRef = React.useRef<HTMLElement>(null);

  function handleCopy() {
    if (codeRef.current) {
      const codeText = codeRef.current.innerText;
      navigator.clipboard.writeText(codeText).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  }

  return (
    <div className="rounded-lg pb-6">
      <div
        className="flex items-center justify-between rounded-t-lg
          bg-foreground/90 px-4 py-2"
      >
        <span className="text-background">Code</span>
        <button
          type="button"
          className={cn('text-background', !copied && 'hover:scale-110')}
          onClick={handleCopy}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre
        className="overflow-auto rounded-b-lg bg-foreground p-4 text-background"
      >
        <code ref={codeRef} className="bg-foreground text-background">
          {children}
        </code>
      </pre>
    </div>
  );
}

export default Code;
