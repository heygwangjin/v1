import VisuallyHidden from '@/components/VisuallyHidden';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'A personal blog sharing development insights, thoughts, and daily stories. Discover useful information and valuable perspectives.',
};

export default function Blog() {
  return (
    <main
      className="flex w-full justify-center px-4 pb-28 pt-12 sm:px-8 sm:pt-16
        lg:pb-16 lg:pt-36 xl:px-0"
    >
      <div
        className="flex h-full w-full max-w-screen-sm flex-col items-center
          justify-start gap-6"
      >
        <VisuallyHidden>
          <h1>Blog</h1>
        </VisuallyHidden>
        <article className="w-full">
          <a href="">
            <h2 className="break-keep text-2xl font-bold sm:text-4xl">
              오픈소스 응애의 미약한 컨트리뷰션 후기
            </h2>
            <p className="mt-1 text-sm text-neutral-500 sm:mt-2 sm:text-base">
              iOS 사파리에서 에디터 커스텀 커서 색깔 변경하기
            </p>
          </a>
          <p className="mt-2 text-xs text-neutral-500 sm:mt-4 sm:text-sm">
            <time dateTime="2024-12-16">2024.12.16.</time>
          </p>
        </article>
      </div>
    </main>
  );
}
