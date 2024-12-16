'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Code({ children }: { children: any }) {
  const [copied, setCopied] = React.useState(false);

  function handleCopy() {
    const codeText = children;
    navigator.clipboard.writeText(codeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
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
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        customStyle={{
          margin: 0,
          background: '#222222',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default Code;
