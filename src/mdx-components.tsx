import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import Code from '@/components/Code';
import HorizontalDashedLine from '@/components/HorizontalDashedLine';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="w-full break-keep pb-4 text-2xl font-bold sm:text-3xl">
        {children}
      </h1>
    ),
    img: props => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    p: ({ children }) => <p className="pb-4 leading-7">{children}</p>,
    ul: ({ children }) => (
      <ul className="w-full list-disc pb-4 pl-6">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="w-full list-decimal pb-4 pl-6">{children}</ol>
    ),
    hr: () => <HorizontalDashedLine className="my-4" />,
    code: ({ children }) => {
      return <Code>{children}</Code>;
    },
    ...components,
  };
}
