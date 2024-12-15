import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'A personal blog sharing development insights, thoughts, and daily stories. Discover useful information and valuable perspectives.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="flex w-full justify-center px-4 pb-28 pt-12 sm:px-8 sm:pt-16
        lg:pb-16 lg:pt-36 xl:px-0"
    >
      <div className="h-full w-full max-w-screen-sm">{children}</div>
    </main>
  );
}
