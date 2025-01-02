'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CopyIcon from '@/components/CopyIcon';

const COPY_DELAY = 2000;
const Languages = {
  js: 'javascript',
  ts: 'typescript',
  css: 'css',
  scss: 'scss',
  sh: 'bash',
  vim: 'vim',
} as const;

type LanguageType = keyof typeof Languages;

function Code({
  children,
  language,
}: {
  children: string;
  language: LanguageType;
}) {
  const [copied, setCopied] = React.useState(false);
  const timerRef = React.useRef<NodeJS.Timeout>();

  async function handleCopy() {
    const codeText = children.trim();
    await navigator.clipboard.writeText(codeText);
    setCopied(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => setCopied(false), COPY_DELAY);
  }

  // Clear the timer when the component unmounts
  React.useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="relative mt-6">
      <button
        type="button"
        className={cn(
          'absolute right-3 top-3 z-10 text-white',
          !copied && 'hover:scale-110',
        )}
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : <CopyIcon />}
      </button>
      <SyntaxHighlighter
        language={Languages[language]}
        style={oneDark}
        customStyle={{
          margin: 0,
          borderRadius: '4px',
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default Code;
