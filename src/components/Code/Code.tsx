'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Languages = {
  js: 'javascript',
  ts: 'typescript',
  css: 'css',
  scss: 'scss',
  sh: 'bash',
  vim: 'vim',
};

type LanguageType = keyof typeof Languages;

function Code({
  children,
  language,
}: {
  children: any;
  language: LanguageType;
}) {
  const [copied, setCopied] = React.useState(false);

  function handleCopy() {
    const codeText = children.trim();
    navigator.clipboard.writeText(codeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="mt-6 rounded-lg">
      <div
        className="flex items-center justify-between rounded-t-lg
          bg-foreground/90 px-4 py-2"
      >
        <span className="text-background">{Languages[language]}</span>
        <button
          type="button"
          className={cn('text-background', !copied && 'hover:scale-110')}
          onClick={handleCopy}
        >
          {copied ? 'copied!' : 'copy'}
        </button>
      </div>
      <SyntaxHighlighter
        language={Languages[language]}
        style={oneDark}
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
