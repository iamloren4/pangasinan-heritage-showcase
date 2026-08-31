import NextImage, { ImageProps as NextImageProps } from "next/image";
import { basePath } from "@/lib/site-config";
/**
 * ATOM: Image
 *
 * Usage context: every photo/illustration on the platform (heritage site
 * photography, icons-as-images) goes through this wrapper instead of a
 * raw <img>, so lazy-loading, sizing, and required alt text are enforced
 * platform-wide.
 *
 * Why this matters for "Lightning Fast": wraps next/image, which
 * automatically serves responsive `srcset` sizes, lazy-loads offscreen
 * images, and prevents layout shift via required width/height — directly
 * supporting the 3G/4G performance requirement.
 *
 * Responsive logic: `aspect` controls a fixed aspect-ratio box (default
 * 4:3) that reflows to the parent container's width at every breakpoint,
 * so HeritageCard grids stay visually aligned on mobile, tablet, and
 * desktop regardless of each source image's native dimensions.
 */
type AspectRatio = "4/3" | "16/9" | "1/1";
const aspectClasses: Record<AspectRatio, string> = {
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
};
interface HeritageImageProps extends Omit<NextImageProps, "alt"> {
  alt: string; // required — never allow decorative empty alt by accident
  aspect?: AspectRatio;
  rounded?: boolean;
}
export function Image({ alt, aspect = "4/3", rounded = true, className = "", src, ...rest }: HeritageImageProps) {
  const resolvedSrc = typeof src === "string" ? `${basePath}${src}` : src;
  return (
    <div className={`relative w-full overflow-hidden ${aspectClasses[aspect]} ${rounded ? "rounded-xl" : ""} bg-sand-300`}>
      <NextImage
        alt={alt}
        src={resolvedSrc}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className={`object-cover ${className}`}
        {...rest}
      />
    </div>
  );
}
