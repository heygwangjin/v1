import Navigator from '@/components/Navigator';
import { cn } from '@/lib/utils';
import { pretendard } from '@/styles/fonts';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: {
    default: 'heygwangjin · Frontend Engineer',
    template: '%s | heygwangjin · Frontend Engineer',
  },
  description: 'Frontend engineer experienced in web development',
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
