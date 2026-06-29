import { LafcBrand } from "@/components/LafcBrand";

export function SponsorBar() {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-zinc-800 bg-lafc-gray px-4 py-2.5">
      <LafcBrand size="compact" />
      <div className="flex flex-1 items-center justify-center gap-2 text-center">
        <span className="text-[10px] uppercase tracking-wider text-zinc-500">
          Presented by
        </span>
        <span className="text-xs font-bold uppercase tracking-wide text-lafc-gold">
          SPONSOR
        </span>
      </div>
      <div className="w-9" aria-hidden="true" />
    </div>
  );
}
