import { cn } from "@/utils";
import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

function Avatar({ src, alt, size = 40, className, ...props }: AvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn("rounded-full", className)}
      {...props}
    />
  );
}

export default Avatar;
