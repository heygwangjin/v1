import Navigator from '@/components/Navigator';
import { cn } from '@/lib/utils';
import { pretendard } from '@/styles/fonts';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: {
    default: 'heygwangjin · Frontend Developer',
    template: '%s | heygwangjin · Frontend Developer',
  },
  description: 'Frontend developer experienced in web development',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const savedTheme = cookies().get('color-theme');
  const theme = savedTheme?.value || 'light';

  return (
    <html lang="en" data-color-theme={theme} className={theme}>
      <body
        className={cn(
          'relative z-10 overflow-x-hidden bg-background text-foreground',
          pretendard.className,
        )}
      >
        <Navigator theme={theme} />
        <main
          className="mx-auto flex h-full w-full max-w-screen-sm justify-center
            px-4 pb-28 pt-12 sm:px-8 sm:pt-16 lg:pb-16 lg:pt-36 xl:px-0"
        >
          <div className="h-full w-full max-w-screen-sm">{children}</div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
