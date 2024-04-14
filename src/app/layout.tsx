import Navigator from "@/components/Navigator";
import { cn } from "@/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "heygwangjin · web developer",
    template: "%s | heygwangjin · web developer",
  },
  description: "Web developer based in Suwon, South Korea.",
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
          "font-geistsans relative z-10 overflow-x-hidden bg-neutral-200 text-neutral-950 dark:bg-neutral-925 dark:text-neutral-50",
          inter.className,
        )}
      >
        <Navigator theme={theme} />
        {children}
      </body>
      <script src="http://localhost:8097" async></script>
    </html>
  );
}
