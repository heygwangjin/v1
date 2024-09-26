"use client";

import useWindowSize from "@/hooks/use-window";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

function Avatar({ src, alt, className, ...props }: AvatarProps) {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width && windowSize.width < 640;

  return (
    <Image
      src={src}
      alt={alt}
      width={isMobile ? 90 : 110}
      height={isMobile ? 90 : 110}
      className={cn("rounded-full", className)}
      {...props}
    />
  );
}

export default Avatar;
