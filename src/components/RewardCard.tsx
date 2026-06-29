import type { Reward } from "@/lib/mockData";
import { demoUser } from "@/lib/mockData";

export function RewardCard({ reward }: { reward: Reward }) {
  const canAfford = demoUser.points >= reward.pointsCost;

  return (
    <article className="flex gap-4 rounded-xl border border-zinc-800 bg-lafc-gray p-4">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-lafc-gray-light">
        <RewardIcon category={reward.category} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-white">{reward.title}</h3>
          <span className="shrink-0 rounded-full bg-lafc-gold/15 px-2 py-0.5 text-[10px] font-medium text-lafc-gold">
            {reward.category}
          </span>
        </div>
        <p className="mb-3 text-xs leading-relaxed text-zinc-400">
          {reward.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-lafc-gold">
            {reward.pointsCost.toLocaleString()} pts
          </span>
          <button
            type="button"
            disabled
            aria-disabled="true"
            className={`min-h-[36px] rounded-lg px-4 py-1.5 text-xs font-semibold ${
              canAfford
                ? "bg-lafc-gold text-lafc-black opacity-60"
                : "border border-zinc-700 text-zinc-500"
            }`}
          >
            {canAfford ? "Redeem" : "Not enough pts"}
          </button>
        </div>
      </div>
    </article>
  );
}

function RewardIcon({ category }: { category: string }) {
  const iconClass = "text-lafc-gold";

  if (category === "Experience") {
    return (
      <svg
        className={iconClass}
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    );
  }

  return (
    <svg
      className={iconClass}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M20 12v8H4v-8" />
      <path d="M22 7H2v5h20V7z" />
      <path d="M12 22V7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}
