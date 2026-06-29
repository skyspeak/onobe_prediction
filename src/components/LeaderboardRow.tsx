import type { LeaderboardEntry } from "@/lib/mockData";

export function LeaderboardRow({ entry }: { entry: LeaderboardEntry }) {
  const isTopThree = entry.rank <= 3;

  return (
    <div
      className={`flex items-center gap-3 rounded-xl px-4 py-3 ${
        entry.isCurrentUser
          ? "border border-lafc-gold/40 bg-lafc-gold/10"
          : "bg-lafc-gray"
      }`}
    >
      <RankBadge rank={entry.rank} isTopThree={isTopThree} />

      <div className="min-w-0 flex-1">
        <p
          className={`truncate text-sm font-semibold ${
            entry.isCurrentUser ? "text-lafc-gold" : "text-white"
          }`}
        >
          {entry.username}
          {entry.isCurrentUser && (
            <span className="ml-1.5 text-[10px] font-normal text-lafc-gold/70">
              (you)
            </span>
          )}
        </p>
      </div>

      <div className="text-right">
        <p className="text-sm font-bold tabular-nums text-white">
          {entry.points.toLocaleString()}
        </p>
        <p className="text-[10px] text-zinc-500">pts</p>
      </div>
    </div>
  );
}

function RankBadge({
  rank,
  isTopThree,
}: {
  rank: number;
  isTopThree: boolean;
}) {
  if (rank === 1) {
    return (
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lafc-gold text-sm font-bold text-lafc-black">
        1
      </span>
    );
  }

  if (rank === 2) {
    return (
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-400 text-sm font-bold text-lafc-black">
        2
      </span>
    );
  }

  if (rank === 3) {
    return (
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-700 text-sm font-bold text-white">
        3
      </span>
    );
  }

  return (
    <span
      className={`flex h-8 w-8 shrink-0 items-center justify-center text-sm font-medium ${
        isTopThree ? "text-lafc-gold" : "text-zinc-500"
      }`}
    >
      {rank}
    </span>
  );
}
