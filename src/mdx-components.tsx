import React from 'react';
import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import Code from '@/components/Code';
import HorizontalDashedLine from '@/components/HorizontalDashedLine';
import Link from 'next/link';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="mb-4 w-full break-keep text-3xl font-bold sm:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 w-full break-keep text-2xl font-bold sm:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 w-full break-keep text-xl font-bold sm:text-2xl">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
    ),
    a: ({ children, href }) => {
      const isExternal = href?.startsWith('http');
      const Component = isExternal ? 'a' : Link;
      return (
        <Component
          href={href as string}
          className="text-blue-500 underline underline-offset-2"
          target={isExternal ? '_blank' : '_self'}
        >
          {children}
        </Component>
      );
    },
    img: props => (
      <Image
        sizes="100vw"
        width={0}
        height={0}
        style={{
          width: '100%',
          height: 'auto',
        }}
        {...(props as ImageProps)}
      />
    ),
    ul: ({ children }) => (
      <ul className="mt-6 w-full list-disc pl-6 leading-7">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-6 w-full list-decimal pl-6 leading-7">{children}</ol>
    ),
    hr: () => <HorizontalDashedLine className="my-4" />,
    pre: ({ children }) => {
      if (React.isValidElement(children)) {
        const language = children.props.className.split('-')[1] ?? '';
        return <Code language={language}>{children.props.children}</Code>;
      }
    },
    code: ({ children }) => (
      <code
        className="relative rounded bg-zinc-200 px-2 py-1 text-sm
          text-foreground dark:bg-zinc-700/70"
      >
        {children}
      </code>
    ),
    ...components,
  };
}
