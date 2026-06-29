import Image from "next/image";

type LafcBrandSize = "hero" | "compact" | "sidebar";

const sizes: Record<
  LafcBrandSize,
  { width: number; height: number; className: string }
> = {
  hero: {
    width: 128,
    height: 148,
    className: "h-auto w-28 sm:w-32",
  },
  compact: {
    width: 40,
    height: 46,
    className: "h-9 w-auto",
  },
  sidebar: {
    width: 80,
    height: 92,
    className: "h-auto w-20",
  },
};

interface LafcBrandProps {
  size?: LafcBrandSize;
  priority?: boolean;
}

export function LafcBrand({ size = "hero", priority = false }: LafcBrandProps) {
  const { width, height, className } = sizes[size];

  return (
    <Image
      src="/lafc.jpeg"
      alt="Los Angeles Football Club"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
