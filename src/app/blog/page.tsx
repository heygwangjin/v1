import VisuallyHidden from '@/components/VisuallyHidden';
import { Metadata } from 'next';
import { data } from '@/data';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'A personal blog sharing development insights, thoughts, and daily stories. Discover useful information and valuable perspectives.',
};

export default function Blog() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start gap-6">
      <VisuallyHidden>
        <h1>Blog</h1>
      </VisuallyHidden>
      {data.blog.map(b => {
        return (
          <article key={b.title} className="group w-full">
            <a href={b.pathname}>
              <h2
                className="break-keep text-xl font-bold text-foreground
                  group-hover:underline group-hover:underline-offset-4
                  sm:text-2xl"
              >
                {b.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                {b.subtitle}
              </p>
            </a>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              <time dateTime={b.createdAt}>
                {formatDate(new Date(b.createdAt))}
              </time>
            </p>
          </article>
        );
      })}
    </div>
  );
}
