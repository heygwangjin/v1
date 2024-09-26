import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

function Avatar({ src, alt, className, ...props }: AvatarProps) {
  return (
    <Image
      fill
      src={src}
      alt={alt}
      className={cn("rounded-full", className)}
      {...props}
    />
  );
}

export default Avatar;
