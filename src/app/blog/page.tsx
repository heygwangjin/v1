import VisuallyHidden from '@/components/VisuallyHidden';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'A personal blog sharing development insights, thoughts, and daily stories. Discover useful information and valuable perspectives.',
};

export default function Blog() {
  return (
    <div className="flex-col items-center justify-start gap-6">
      <VisuallyHidden>
        <h1>Blog</h1>
      </VisuallyHidden>
      <article className="group w-full">
        <a href="/blog/challenging-open-source-contribution">
          <h2
            className="break-keep text-xl font-bold group-hover:underline
              group-hover:underline-offset-4 sm:text-2xl"
          >
            험난한 오픈소스 컨트리뷰션
          </h2>
          <p className="mt-1 text-sm text-neutral-500 sm:text-base">
            iOS 사파리에서 코드미러 에디터 커서 색깔 버그 수정하기
          </p>
        </a>
        <p className="mt-2 text-xs text-neutral-500 sm:text-sm">
          <time dateTime="2024-12-16">2024.12.16.</time>
        </p>
      </article>
    </div>
  );
}
