import Navigator from "@/components/Navigator";
import { pretendard } from "@/styles/fonts";
import "@/styles/globals.css";
import { cn } from "@/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: {
    default: "heygwangjin · web developer",
    template: "%s | heygwangjin · web developer",
  },
  description: "Web developer based in Suwon, South Korea.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const savedTheme = cookies().get("color-theme");
  const theme = savedTheme?.value || "light";

  return (
    <html lang="en" data-color-theme={theme} className={theme}>
      <body
        className={cn(
          "relative z-10 overflow-x-hidden bg-neutral-200 text-neutral-950 dark:bg-neutral-925 dark:text-neutral-50",
          pretendard.className,
        )}
      >
        <Navigator theme={theme} />
        {children}
        <Analytics />
      </body>
      {process.env.NODE_ENV === "development" && (
        <script src="http://localhost:8097" async></script>
      )}
    </html>
  );
}
